import { useState, useEffect} from 'react';
import { Checkbox as PaperCheckbox } from 'react-native-paper';
import { View, Text } from 'react-native';
import { BACKGROUND_COLOR } from '../consts';
import { Tag } from '../api/data_types';
import { updateTags } from '../api/data';

interface CheckboxProps {
  tag: Tag;
  oldChecked?: Promise<boolean>;
}

function Checkbox({ tag, oldChecked }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    oldChecked?.then((val) => setChecked(!val));
  }, []);

  return (
    <View style={[{ flexDirection: "row", alignItems: "center" }]}>

    <PaperCheckbox.Android
      color={BACKGROUND_COLOR}
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
        updateTags(tag, !checked);
      }}
    />
    <Text>{tag}</Text>

    </View>
  )
}

export default Checkbox;