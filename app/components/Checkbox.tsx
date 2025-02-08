import { useState, useEffect} from 'react';
import { Checkbox as PaperCheckbox } from 'react-native-paper';
import { View, Text, NativeSyntheticEvent, TextInputEndEditingEventData} from 'react-native';
import { BACKGROUND_COLOR } from '../consts';
import { Tag } from '../api/data_types';
import { getMatchData, updateTags } from '../api/data';

interface CheckboxProps {
  label: string;
  oldChecked?: Promise<boolean>;
  checkState?: (selected: boolean) => void;
  tag: Tag;
}

function Checkbox({ label, oldChecked, checkState}: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    oldChecked?.then(setChecked);
    
  }, []);

  return (
    <View style={[{ flexDirection: "row", alignItems: "center" }]}>

    <PaperCheckbox 
      color = {BACKGROUND_COLOR}
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
        updateTags()
      }}
    />
    <Text>{label}</Text>

    </View>
  )
}

export default Checkbox;