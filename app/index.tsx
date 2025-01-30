import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';
import Dropdown from './components/Dropdown';
import TextInputComponent from './components/TextInputComponent';
import NavButton from './components/NavButton';
import PageHeader from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Dropdown label="Name" id="nameSelect" items={["Name 1", "Name 2", "Name 3", "Name 4"]} placeholder="[Select your name]"></Dropdown>
      <TextInputComponent label="Team number" editable={false}/>
      <TextInputComponent label="Match number" editable={false}/>
      <Dropdown label="Driver Station Location" id="nameSelect" items={["Name 1", "Name 2", "Name 3", "Name 4"]} placeholder="[Select location]"></Dropdown>
      <NavButton text="Go" pageName="auto"></NavButton>

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
