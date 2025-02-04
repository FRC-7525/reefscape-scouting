import { Text, View } from 'react-native';
import { useState } from 'react';
import { Switch } from 'react-native-paper';
import React from 'react';
import RadioButtonComponent from '../components/RadioButtonComponent';
import HorizontalLine from '../components/HorizontalLine';
import { updateLeftStart } from '../api/data';

function AutoStartPositionView () {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        updateLeftStart(isEnabled);
    }

    return (
        <View>
            <HorizontalLine />
            <Text>{'Left start line:'}</Text>
            <Switch
                trackColor={{ false: '#151E26', true: '#E9ECEF' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled} /> 
            <Text>{isEnabled ? 'Yes' : 'No'}</Text>

            <Text> {'Starting Position:'}</Text>
            <RadioButtonComponent data={["Scoring Table Side", "Center", "Audience Side"]} />
            
            <HorizontalLine />
        </View>   
    )
}


export default AutoStartPositionView;