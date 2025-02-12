import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import LabeledTextInput from './components/LabeledTextInput';
import { addUnsyncedData, getMatchData, updateNotes } from './api/data';
import PageHeader from './components/Header';
import SummaryTableView from './views/SummaryTableView';
import NavButton from './components/NavButton';

export default function App() {
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
                getMatchData().then((data) => {
                    addUnsyncedData(data);
                }).catch((err) => console.error(err));
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