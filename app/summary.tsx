import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import LabeledTextInput from './components/LabeledTextInput';
import { getMatchData, updateNotes } from './api/data';
import PageHeader from './components/Header';
import SummaryTableView from './views/SummaryTableView';

export default function App() {
    return (
        <View style={styles.container}>
            <PageHeader title="Summary" pageNumber="4/4" previous='teleop' />
            <ScrollView> 
            <SummaryTableView />

            <LabeledTextInput label="Notes" editable={true} multiline={true} 
                submit={(e) => {
                    updateNotes(e.nativeEvent.text);
                }} oldValue={getMatchData().then((data) => data["notes"])} required />
            <Dropdown label="Tags" items={["tag 1", "tag 2"]} placeholder="tag"></Dropdown>
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