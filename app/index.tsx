import { StatusBar } from 'expo-status-bar';
import { Keyboard, ScrollView, StyleSheet, View } from 'react-native';
import NavButton from './components/NavButton';
import PageHeader from './components/Header';
import LabeledTextInput from './components/LabeledTextInput';
import { getMatchData, updateMatchNumber, updateName, updateTeamNumber, updateDriverStation } from './api/data';
import { DRIVER_STATION } from './api/data_types';
import React, { useEffect, useState } from 'react';
import RadioButton from './components/RadioButton';

export default function App() {
    const [ nameFilled, setNameFilled ] = useState(false);
    const [ teamNumberFilled, setTeamNumberFilled ] = useState(false);
    const [ matchFilled, setMatchFilled ] = useState(false);

    useEffect(() => {
        const initializeRequirements = () => {
            getMatchData().then((data) => {
                setNameFilled(data["scouterName"] !== "");
                setTeamNumberFilled(data["teamNumber"] !== 0);
                setMatchFilled(data["matchNumber"] !== 0);
            })
        }

        initializeRequirements();
    })

    return (
        <View style={styles.container} onTouchStart={Keyboard.dismiss}>
            <PageHeader title='Main' pageNumber='1/4' showTeam={false} />
            <ScrollView>

            <LabeledTextInput label="Name" editable={true} submit={(e) => {
                updateName(e.nativeEvent.text);
                setNameFilled(e.nativeEvent.text !== "");
            }} oldValue={
                getMatchData().then((data) => data["scouterName"])
            } required />
            
            <LabeledTextInput label="Team Number" editable={true}
                inputMode='numeric' submit={(e) => {
                    updateTeamNumber(Number(e.nativeEvent.text));
                    setTeamNumberFilled(e.nativeEvent.text !== "" && e.nativeEvent.text !== "0");
                }} oldValue={
                    getMatchData().then((data) => data["teamNumber"].toString())
                } required />

            <LabeledTextInput label="Match number" editable={true}
                inputMode='numeric' submit={(e) => {
                    updateMatchNumber(Number(e.nativeEvent.text));
                    setMatchFilled(e.nativeEvent.text !== "" && e.nativeEvent.text !== "0");
                }} oldValue={
                    getMatchData().then((data) => data["matchNumber"].toString())
                } required />

            <RadioButton
                data={["Red 1", "Red 2", "Red 3", "Blue 1", "Blue 2", "Blue 3"]}
                onSelect={(selected: string) => { updateDriverStation(selected as DRIVER_STATION) }}
                oldSelected={getMatchData().then((data) => data["driverStation"])} />
            
            <NavButton text="Go" pageName="auto"
                disabled={ !(nameFilled && teamNumberFilled && matchFilled) } />

            <StatusBar style="auto" />
            </ScrollView>
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
