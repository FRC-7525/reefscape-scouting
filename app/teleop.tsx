import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import NavButton from './components/NavButton';
import ReefAlgaeView from './views/ReefAlgaeView';
import EndgameView from './views/EndgameView';
import PageHeader from './components/Header';
import AlgaeView from './views/AlgaeView';

export default function App() {
    return (
        <View style={styles.container}>
            <PageHeader title='Teleop' pageNumber='3/4' previous="auto" />
            <ScrollView>

            <ReefAlgaeView phase="teleop" />
            <AlgaeView phase="teleop" />
            <EndgameView/>
            

            <StatusBar style="auto" />
            <NavButton pageName='summary' text='Next' />
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