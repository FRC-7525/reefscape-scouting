import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput} from 'react-native';
import Dropdown from './components/Dropdown';
import TextInputComponent from './components/TextInputComponent';
import NavButton from './components/NavButton';

export default function App() {
    return (
        <View style={styles.container}>
            <TextInputComponent label="Notes" editable={true}/>
            <Dropdown label="Tags" id="tags" items={["tag 1", "tag 2"]} placeholder="tag"></Dropdown>
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