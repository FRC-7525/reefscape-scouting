import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import NavButton from './components/NavButton';
import ReefAlgaeView from './views/ReefAlgaeView';
import EndgameView from './views/EndgameView';
import PageHeader from './components/Header';
import AlgaeView from './views/AlgaeView';
import { getMatchData } from './api/data';
import { Button } from 'react-native-paper';

export default function App() {
    return (
        <View style={styles.container}>
            <PageHeader title='Teleop' pageNumber='3/4' previous="auto" />

            <ReefAlgaeView phase="teleop" />
            <AlgaeView phase="teleop" />
            <EndgameView/>
            <Button onPress={() => {
                getMatchData().then((data) => console.log(data));
            }}>get match data</Button>

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