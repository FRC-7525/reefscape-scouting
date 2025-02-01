import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PageHeader from './components/Header';
import NavButton from './components/NavButton';
import ReefAlgaeView from './views/ReefAlgaeView';
import AutoStartPositionView from './views/AutoStartPositionView'

export default function App() {
    return (
        <View style={styles.container}>
            <PageHeader title='Autonomous' pageNumber='2/4' />

            <NavButton text="Back" pageName="" />

            <AutoStartPositionView/>

            <ReefAlgaeView />

            <StatusBar style="auto" />

            <NavButton text="Next" pageName="teleop" />
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
