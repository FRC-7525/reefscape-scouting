import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import NavButton from './components/NavButton';
import PageHeader from './components/Header';
import LabeledTextInput from './components/LabeledTextInput';
import { getMatchData, updateMatchNumber, updateName, updateTeamNumber } from './api/data';
import { Button } from 'react-native-paper';

export default function App() {
    return (
        <View style={styles.container}>
            <PageHeader title='Main' pageNumber='1/4' />
            <LabeledTextInput placeholder="Name" editable={true} submit={(e) => {
                updateName(e.nativeEvent.text);
            }}/>
            
            <LabeledTextInput placeholder="Team number" editable={true}
                inputMode='numeric' submit={(e) => {
                    updateTeamNumber(Number(e.nativeEvent.text));
                }} />

            <LabeledTextInput placeholder="Match number" editable={true}
                inputMode='numeric' submit={(e) => {
                    updateMatchNumber(Number(e.nativeEvent.text));
                }}/>
            <Dropdown label="Driver Station Location" items={["Red 1", "Red 2", "Red 3", "Blue 1", "Blue 2", "Blue 3"]} placeholder="[Select location]" />
            <NavButton text="Go" pageName="auto" />
            <Button onPress={() => {
                getMatchData().then((data) => console.log(data));
            }}>Get Data</Button>

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
