import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch } from 'react-native';
import Dropdown from './components/Dropdown';
import TextInput from './components/TextInputComponent';
import NavButton from './components/NavButton';
import ReefAlgaeView from './views/ReefAlgaeView';
import EndgameView from './views/EndgameView';
import PageHeader from './components/Header';

export default function App() {
    return (
        <View style={styles.container}>
            <PageHeader title='Teleop' pageNumber='3/4' />

            <NavButton text="Back" pageName="auto" />

            <ReefAlgaeView />
            <EndgameView/>

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