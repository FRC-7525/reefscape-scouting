import { View, Text, GestureResponderEvent } from 'react-native'
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';

interface RadioButtonComponentProps {
    data: string[];
    onSelect?: (option: string) => void;
}

function RadioButtonComponent({ data, onSelect }: RadioButtonComponentProps) {
    onSelect ??= () => {};

    const [ checked, setChecked ] = useState(data[0]);
    const onOptionSelect = (option: string) => {
        setChecked(option);
        onSelect(option);
    }

    return (
        <View>
            { data.map((element, i) =>
                <View key={element} style={[{ flexDirection: "row", alignItems: "center" }]}>
                    <RadioButton.Android value={element}
                        status={checked === element ? "checked" : "unchecked"}
                        onPress={() => onOptionSelect(element)} />    
                    <Text>{element}</Text>
                </View>
            ) }
        </View>
    );
} 

export default RadioButtonComponent;