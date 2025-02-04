import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import NavButton from './components/NavButton';
import LabeledTextInput from './components/LabeledTextInput';
import { getMatchData, updateNotes } from './api/data';
import PageHeader from './components/Header';
import { Button } from 'react-native-paper';

export default function App() {
    return (
        <View style={styles.container}>
            <PageHeader title="Summary" pageNumber="4/4" previous='teleop' />
            <LabeledTextInput label="Notes" editable={true} multiline={true} 
                submit={(e) => { updateNotes(e.nativeEvent.text); }}/>
            <Dropdown label="Tags" items={["tag 1", "tag 2"]} placeholder="tag"></Dropdown>

            <Button onPress={() => {
                getMatchData().then((res) => console.log(res));
            }} >Get matchData</Button>
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