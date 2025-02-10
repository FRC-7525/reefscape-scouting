import { useState, useEffect} from 'react';
import { Checkbox as PaperCheckbox } from 'react-native-paper';
import { View, Text } from 'react-native';
import { BACKGROUND_COLOR } from '../consts';
import { Tag } from '../api/data_types';

interface CheckboxProps {
  tag: Tag;
  oldChecked?: Promise<boolean>;
  onCheck?: (selected: boolean) => void;
}

function Checkbox({ tag, oldChecked, onCheck}: CheckboxProps) {
  const [checked, setChecked] = useState(false);
  onCheck ??= () => {};

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
        onCheck(!checked);
      }}
    />
    <Text>{tag}</Text>

    </View>
  )
}

export default Checkbox;