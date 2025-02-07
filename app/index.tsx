import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import NavButton from './components/NavButton';
import PageHeader from './components/Header';
import LabeledTextInput from './components/LabeledTextInput';
import { getMatchData, updateMatchNumber, updateName, updateTeamNumber, updateDriverStation } from './api/data';
import { DRIVER_STATION } from './api/data_types';
import { useState } from 'react';
import RadioButton from './components/RadioButton';

export default function App() {
    return (
        <View style={styles.container}>
            <PageHeader title='Main' pageNumber='1/4' />
            <LabeledTextInput placeholder="Name" editable={true} submit={(e) => {
                updateName(e.nativeEvent.text);
            }} oldValue={
                getMatchData().then((data) => data["scouterName"])
            } />
            
            <LabeledTextInput placeholder="Team number" editable={true}
                inputMode='numeric' submit={(e) => {
                    updateTeamNumber(Number(e.nativeEvent.text));
                }} oldValue={
                    getMatchData().then((data) => data["teamNumber"].toString())
                } />

            <LabeledTextInput placeholder="Match number" editable={true}
                inputMode='numeric' submit={(e) => {
                    updateMatchNumber(Number(e.nativeEvent.text));
                }} oldValue={
                    getMatchData().then((data) => data["matchNumber"].toString())
                } />

            <RadioButton
                data={["Red 1", "Red 2", "Red 3", "Blue 1", "Blue 2", "Blue 3"]}
                onSelect={(selected: string) => { updateDriverStation(selected as DRIVER_STATION) }}
                oldSelected={getMatchData().then((data) => data["driverStation"])} />
            
            <NavButton text="Go" pageName="auto" />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: '#fff',
        rowGap: 15
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
