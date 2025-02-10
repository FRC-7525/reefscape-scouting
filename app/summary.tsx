import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import NavButton from './components/NavButton';
import LabeledTextInput from './components/LabeledTextInput';
import { getMatchData, updateNotes, updateTags } from './api/data';
import PageHeader from './components/Header';
import { Button } from 'react-native-paper';
import Checkbox from './components/Checkbox';

export default function App() {
    return (
        <View style={styles.container}>
            <PageHeader title="Summary" pageNumber="4/4" previous='teleop' />
            <LabeledTextInput label="Notes" editable={true} multiline={true} 
                submit={(e) => {
                    updateNotes(e.nativeEvent.text);
                }} oldValue={getMatchData().then((data) => data["notes"])} />
            <Checkbox tag='tag1' oldChecked={getMatchData().then((data) => data["tags"].includes("tag1") )} />
            <Checkbox tag='tag2'/>

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