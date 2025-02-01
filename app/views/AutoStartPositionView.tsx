import { Switch, StyleSheet, Button, Text, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import RadioButtonComponent from '../components/RadioButtonComponent';

const Separator = () => <View style={styles.separator} />;

function AutoStartPositionView () {
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
        const data = [
            { label: 'Scoring Table Side', value: 0 },
            { label: 'Center', value: 1 },
            { label: 'Audience Side', value: 2 },
        ];
    
        return (
            <>
            <Separator></Separator>

                <Text> {'Left start line:'}</Text>
                <Switch
                    trackColor={{ false: '#151E26', true: '#E9ECEF' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor=" "
                    onValueChange={toggleSwitch}
                    value={isEnabled} /> 
                <Text> {isEnabled ? 'Yes' : 'No'}</Text>

                <Text> {'Starting Position:'}</Text>
                <RadioButtonComponent
                data= {data}
                    />
                <Separator></Separator>

                </>   
        )
    }

const styles = StyleSheet.create({

    separator: {
            marginVertical: 2,
            borderBottomWidth: StyleSheet.hairlineWidth,
            },
    
        });

export default AutoStartPositionView;