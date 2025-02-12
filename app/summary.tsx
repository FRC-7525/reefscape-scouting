import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import LabeledTextInput from './components/LabeledTextInput';
import { getMatchData, updateNotes, updateTags } from './api/data';
import PageHeader from './components/Header';

import Checkbox from './components/Checkbox';
import SummaryTableView from './views/SummaryTableView';

export default function App() {
    return (
        <View style={styles.container} onTouchStart={Keyboard.dismiss}>
            <PageHeader title="Summary" pageNumber="4/4" previous='teleop' />

            <LabeledTextInput label="Notes" editable={true} multiline={true} 
                submit={(e) => {
                    updateNotes(e.nativeEvent.text);
                }} oldValue={getMatchData().then((data) => data["notes"])} />
            <SummaryTableView />
            <Dropdown label="Tags" items={["tag 1", "tag 2"]} placeholder="tag"></Dropdown>
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
