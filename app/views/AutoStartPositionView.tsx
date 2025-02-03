import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Switch } from 'react-native-paper';
import RadioButtonComponent from '../components/RadioButton';

function AutoStartPositionView () {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View style={styles.container}>
            <View style={styles.side}>
                <Text>{'Left start line:'}</Text>
                <Switch
                    color="#2c2c2c"
                    onValueChange={toggleSwitch}
                    value={isEnabled} /> 
            </View>
            <View style={[{ width: 0.5, backgroundColor: "black" }]}/>
            <View style={styles.side}>
                <Text> {'Starting Position:'}</Text>
                <RadioButtonComponent data={["Scoring Table Side", "Center", "Audience Side"]} />
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