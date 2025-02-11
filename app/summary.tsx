import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import LabeledTextInput from './components/LabeledTextInput';
import { getMatchData, updateNotes } from './api/data';
import PageHeader from './components/Header';
import SummaryTableView from './views/SummaryTableView';
import NavButton from './components/NavButton';
import { getDatabase, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { firebase, db } from '../firebaseConfig';

export default function App() {
    const [ scouterName, setScouterName ] = useState("");
    const [ matchNumber, setMatchNumber ] = useState(0);
    const [ teamNumber, setTeamNumber ] = useState(0);
    const [ matchData, setMatchData ] = useState({});

    useEffect(() => {
        getMatchData().then((data) => {
            setScouterName(data["scouterName"]);
            setMatchNumber(data["matchNumber"]);
            setTeamNumber(data["teamNumber"]);
            setMatchData(data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <PageHeader title="Summary" pageNumber="4/4" previous='teleop' />
            <SummaryTableView />

            <LabeledTextInput label="Notes" editable={true} multiline={true} 
                submit={(e) => {
                    updateNotes(e.nativeEvent.text);
                }} oldValue={getMatchData().then((data) => data["notes"])} required />
            <Dropdown label="Tags" items={["tag 1", "tag 2"]} placeholder="tag"></Dropdown>

            <NavButton text="End" onClick={() => {
                set(ref(db, `team_${teamNumber}/${matchNumber}_${scouterName}`), matchData);
            }} />
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