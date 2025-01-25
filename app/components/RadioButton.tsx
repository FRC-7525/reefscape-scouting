import RadioForm from 'react-native-simple-radio-button';
import {View, Text} from 'react-native'
import {useState} from 'react'

export default function ReactSimpleButton() {
    const [chosenOption, setChosenOption] = useState('apple'); //will store our current user options
    const options = [
      { label: '', value: 'apple' },
      { label: 'Samsung', value: 'samsung' },
    ]; //create our options for radio group
    const data = [
        { value: 'Center'},
        { value: 'Audience'},
        { value: ''}
    ]

    return (
      <View>
        <Text> {chosenOption}</Text>
        <RadioForm
          radio_props={options}
          initial={0} //initial value of this group
          onPress={(value) => {
            setChosenOption(value);
          }} //if the user changes options, set the new value
        />
      </View>
    );
  }