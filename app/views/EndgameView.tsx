import { useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import React from 'react';
import RadioButtonComponent from '../components/RadioButtonComponent';

const Separator = () => <View style={styles.separator} />;

function EndgameView () {
    const [isEnabled, setIsEnabled] = useState(false);
    const data = [
      { label: 'Deep Climb', value: 0 },
      { label: 'Shallow Climb', value: 1 },
      { label: 'Park', value: 2 },
      { label: 'Nothing', value: 3 },
    ];
  
    return (
        <>
        <Text> {'Climb?:'}</Text>
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

    export default EndgameView;