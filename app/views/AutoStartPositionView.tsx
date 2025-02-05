import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Switch } from 'react-native-paper';
import RadioButtonComponent from '../components/RadioButton';
import { BACKGROUND_COLOR } from '../consts';
import { getMatchData, updateLeftStart, updateStartPosition } from '../api/data';
import { START_POSITION } from '../api/data_types';


function AutoStartPositionView () {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        updateLeftStart(!isEnabled);
    }

    return (
        <View style={styles.container}>
            <View style={styles.side}>
                <Text>{'Left start line:'}</Text>
                <Switch
                    color={BACKGROUND_COLOR}
                    onValueChange={toggleSwitch}
                    value={isEnabled} /> 
            </View>
            <View style={[{ width: 0.5, backgroundColor: "black" }]}/>
            <View style={styles.side}>
                <Text> {'Starting Position:'}</Text>
                <RadioButtonComponent data={["Scoring Table Side", "Center", "Audience Side"]}  
                    onSelect={(option: string) => {
                        updateStartPosition(option as START_POSITION);
                    }}
                    oldSelected={getMatchData().then((data) => data["autonomous"]["startPosition"])} />
            </View>
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    side: {
        flex: 1,
        alignItems: 'center'
    }
});

export default AutoStartPositionView;