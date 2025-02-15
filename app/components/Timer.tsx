import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';  

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startStop = () => {
        if (isRunning) {
            if (intervalRef.current) clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(() => {
                setTime((prevTime: number) => prevTime + 10);
            }, 10);
        }
        
        setIsRunning(!isRunning);
    };


    const reset = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTime(0);
        setIsRunning(false);
    };

    
    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = ms % 1000;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{formatTime(time)}</Text>
            <View style={styles.buttons}>
                <Button mode="contained" onPress={startStop}>
                    {isRunning ? 'Stop' : 'Start'}
                </Button>
            </View>
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
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Stopwatch;
