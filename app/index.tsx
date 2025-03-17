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
    const [ eventCode, setEventCode ] = useState("");
    const [ unsyncedMatches, setUnsyncedMatches ] = useState(0);
    const [ driverStation, setDriverStation ] = useState("");
    const [ matchNumber, setMatchNumber ] = useState(0);
    const [ teamNumber, setTeamNumber ] = useState(0);

    const sync = () => {
        AsyncStorage.getItem("unsynced").then(async (res) => {
            const unsyncedMatches = JSON.parse(res ?? "[]") as MatchData[];
            
            setUnsyncedMatches(unsyncedMatches.length);

            onValue(ref(db, "eventCode"), (code) => {
                setEventCode(code.val());
                
                if (unsyncedMatches.length === 0) return;
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
        });
    }

    useEffect(() => {
        getMatchData().then((data) => {
            setNameFilled(data["scouterName"] !== "");
            setDriverStation(data["driverStation"]);
            setMatchNumber(data["matchNumber"]);
        });

        console.log(process.env.EXPO_PUBLIC_SHA)
        sync();
   }, []);

    useEffect(() => {
        if (matchNumber !== 0 && eventCode !== "") {
            onValue(ref(db, "/apiKey"), (snap) => {
                fetch(`https://www.thebluealliance.com/api/v3/event/${eventCode}/matches/simple?X-TBA-Auth-Key=${snap.val()}`)
                .then(res => res.json())
                .then(json => {
                    json.forEach((match: any) => {
                        if (match.comp_level == "qm" && match.match_number == matchNumber) {
                            const [ teamColor, position ] = driverStation.split(" ");
                            const alliance = match["alliances"][teamColor.toLocaleLowerCase()];
                            const teamCode = alliance["team_keys"][Number(position) - 1];
                            const team = teamCode.split("frc")[1]; // every teamCode has "frc" prepended, this just gets rid of it

                            setTeamNumber(team); 
                            updateTeamNumber(team);
                        }
                    })
                }).catch(err => console.warn(err));
            }, { onlyOnce: true });
        } else {
            setTeamNumber(0);
        }
    }, [ driverStation, matchNumber, eventCode ]);

    return (
        <View style={styles.container} onTouchStart={Keyboard.dismiss}>
            <PageHeader title='Main' pageNumber='1/4' showTeam={false} />
            <ScrollView>
                { eventCode !== "" && <Text>Event Code: {eventCode}</Text> }
                { unsyncedMatches !== 0 && <Text>Unsynced Matches: {unsyncedMatches}</Text> }
                { teamNumber !== 0 && <Text>Team Number: {teamNumber}</Text> }
                <LabeledTextInput label="Name" editable={true} submit={(e) => {
                        updateName(e.nativeEvent.text);
                        setNameFilled(e.nativeEvent.text !== "");
                    }} oldValue={
                        getMatchData().then((data) => data["scouterName"])
                    } required />


                <LabeledTextInput label="Match number" editable={true}
                    inputMode='numeric' submit={(e) => {
                        const matchNumber = Number(e.nativeEvent.text);
                        updateMatchNumber(matchNumber);
                        setMatchNumber(matchNumber);
                    }} oldValue={
                        getMatchData().then((data) => data["matchNumber"].toString())
                    } required />

                <RadioButton
                    data={["Red 1", "Red 2", "Red 3", "Blue 1", "Blue 2", "Blue 3"]}
                    onSelect={(selected: string) => {
                        updateDriverStation(selected as DRIVER_STATION);
                        setDriverStation(selected);
                    }}
                    oldSelected={getMatchData().then((data) => data["driverStation"])} />


                <NavButton text="Go" pageName="auto"
                    disabled={ !(nameFilled && teamNumber !== 0 && matchNumber !== 0) } />
                
                { unsyncedMatches > 0 && <NavButton text="Sync" onClick={sync} /> }

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
