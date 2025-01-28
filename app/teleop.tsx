import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch } from 'react-native';
import Dropdown from './components/Dropdown';
import TextInput from './components/TextInputComponent';
import NavButton from './components/NavButton';
import ReefAlgaeView from './views/ReefAlgaeView';
import EndgameView from './views/EndgameView';

export default function App() {
  return (
    <View style={styles.container}>
      <NavButton text="Back" pageName="auto"></NavButton>
      <NavButton text="Next" pageName="summary"></NavButton>

      <ReefAlgaeView/>
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