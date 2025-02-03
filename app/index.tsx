import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import NavButton from './components/NavButton';
import PageHeader from './components/Header';
import LabeledTextInput from './components/LabeledTextInput';

export default function App() {
    return (
        <View style={styles.container}>
            <PageHeader title='Main' pageNumber='1/4' />
            <LabeledTextInput placeholder="Name" editable={true} />
            <LabeledTextInput placeholder="Team number" editable={true} />
            <LabeledTextInput placeholder="Match number" editable={true} />
            <Dropdown label="Driver Station Location" items={["Red 1", "Red 2", "Red 3", "Blue 1", "Blue 2", "Blue 3"]} placeholder="[Select location]" />
            <NavButton text="Go" pageName="auto" />

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
