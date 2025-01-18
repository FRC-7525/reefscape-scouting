import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch } from 'react-native';
import Dropdown from './components/Dropdown';
import TextInput from './components/TextInput';
import NavButton from './components/NavButton';
import ReefAlgaeView from './views/ReefAlgaeView';
import AutoStartPositionView from './views/AutoStartPositionView'

export default function App() {
  return (
    <View style={styles.container}>
      <NavButton text="Back" pageName=""></NavButton>

      <AutoStartPositionView/>

      <ReefAlgaeView />

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
