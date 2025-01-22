import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Dropdown from './components/Dropdown';
import TextInput from './components/TextInput';
import NavButton from './components/NavButton';
import PageHeader from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <PageHeader title='Main' pageNumber='1/4'></PageHeader>
      <Dropdown label="Name" id="nameSelect" items={["Name 1", "Name 2", "Name 3", "Name 4"]} placeholder="[Select your name]"></Dropdown>
      <TextInput label="Team number" editable={false}></TextInput>
      <TextInput label="Match number" editable={false}></TextInput>
      <Dropdown label="Driver Station Location" id="nameSelect" items={["Red 1", "Red 2", "Red 3", "Blue 1", "Blue 2", "Blue 3"]} placeholder="[Select location]"></Dropdown>
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
