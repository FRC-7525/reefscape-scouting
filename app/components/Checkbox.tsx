import { useState } from 'react';
import { Checkbox } from 'react-native-paper';

const checkboxComponent = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default checkboxComponent;