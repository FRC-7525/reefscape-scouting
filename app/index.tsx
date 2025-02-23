import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, View, Text, ScrollView } from 'react-native';
import NavButton from './components/NavButton';
import PageHeader from './components/Header';
import LabeledTextInput from './components/LabeledTextInput';
import { getMatchData, updateMatchNumber, updateName, updateTeamNumber, updateDriverStation } from './api/data';
import { DRIVER_STATION, MatchData } from './api/data_types';
import { useEffect, useState } from 'react';
import RadioButton from './components/RadioButton';
import { child, onValue, push, ref, set, update } from 'firebase/database';
import { db } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from "expo-file-system";

export default function App() {
    const [ nameFilled, setNameFilled ] = useState(false);
    const [ teamNumberFilled, setTeamNumberFilled ] = useState(false);
    const [ matchFilled, setMatchFilled ] = useState(false);
    const [ eventCode, setEventCode ] = useState("");
    const [ unsyncedMatches, setUnsyncedMatches ] = useState(0);

    useEffect(() => {
        getMatchData().then((data) => {
            setNameFilled(data["scouterName"] !== "");
            setTeamNumberFilled(data["teamNumber"] !== 0);
            setMatchFilled(data["matchNumber"] !== 0);
        });

        
        
        AsyncStorage.getItem("unsynced").then(async (res) => {
            if (res === null) return; 

            const unsyncedMatches = JSON.parse(res) as MatchData[];
            
            setUnsyncedMatches(unsyncedMatches.length);
            
            onValue(ref(db, ".info/connected"), (snap) => {
                if (snap.val() === false) return;
                
                onValue(ref(db, "eventCode"), (code) => {
                    setEventCode(code.val());
                    
                    const updates: { [key: string]: MatchData } = {};
                    unsyncedMatches.forEach((data) => {
                        const path = `${code.val()}/${data["teamNumber"]}/${data["matchNumber"]}/${data["scouterName"]}`;
                        FileSystem.writeAsStringAsync((FileSystem.documentDirectory ?? "") + path.replaceAll("/", "_"), JSON.stringify(data))
                            .catch((err) => { console.error(`Failed to write match: ${err}`) });

                        updates[path] = data;
                    });
                        
                    update(ref(db), updates).then(() => {
                        AsyncStorage.setItem("unsynced", "[]");
                        setUnsyncedMatches(0);
                    });
                });
             }, { onlyOnce: true }); 
        });
    }, [])

    return (
        <View style={styles.container} onTouchStart={Keyboard.dismiss}>
            <PageHeader title='Main' pageNumber='1/4' showTeam={false} />
            <ScrollView>
                <Text>Event Code: {eventCode}</Text>
                <Text>Unsynced Matches: {unsyncedMatches}</Text>
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
