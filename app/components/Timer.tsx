import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';  
import { getMatchData, updateDefenseTime } from '../api/data';
import SectionTitle from './SectionTitle';
import { BACKGROUND_COLOR, TEXT_COLOR } from '../consts';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        getMatchData().then((data) => {
            setTime(data["teleop"]["defenseTime"] ?? 0);
        });
    }, []);

    const startStop = () => {
        if (isRunning && intervalRef.current) {
            clearInterval(intervalRef.current);
            updateDefenseTime(time + 10);
        } else {
            intervalRef.current = setInterval(() => {
                setTime((prevTime: number) => prevTime + 10);
            }, 10);
        }
        
        setIsRunning(!isRunning);
    };

    
    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = ms % 1000;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    };

    return (
        <View style={styles.container}>
            <SectionTitle>Defense Time</SectionTitle>
            <Text style={styles.time}>{formatTime(time)}</Text>
            <Button mode="contained" onPress={startStop} textColor={TEXT_COLOR} buttonColor={BACKGROUND_COLOR}>
                {isRunning ? 'Stop' : 'Start'}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  time: {
    fontSize: 15,
    marginBottom: 10,
  }
});

export default Stopwatch;
