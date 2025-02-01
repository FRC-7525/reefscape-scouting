import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import NavButton from './components/NavButton';
import LabeledTextInput from './components/LabeledTextInput';

export default function App() {
    return (
        <View style={styles.container}>
            <LabeledTextInput label="Notes" editable={true} />
            <Dropdown label="Tags" items={["tag 1", "tag 2"]} placeholder="tag"></Dropdown>
            <NavButton text="Back" pageName="teleop"></NavButton>
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