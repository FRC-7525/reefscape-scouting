import { View, Text, GestureResponderEvent } from 'react-native'
import { useEffect, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { BACKGROUND_COLOR } from '../consts';

interface RadioButtonComponentProps {
    data: string[];
    onSelect?: (option: string) => void;
    oldSelected?: Promise<string>;
}

function RadioButtonComponent({ data, onSelect, oldSelected }: RadioButtonComponentProps) {
    onSelect ??= () => {};

    const [ checked, setChecked ] = useState("");

    useEffect(() => {
        const getChecked = async () => {
            setChecked(await oldSelected ?? data[0]);
        }

        getChecked();
    }, []);

    const onOptionSelect = (option: string) => {
        setChecked(option);
        onSelect(option);
    }

    return (
        <View>
            { data.map((element) =>
                <View key={element} style={[{ flexDirection: "row", alignItems: "center" }]}>
                    <RadioButton.Android color={BACKGROUND_COLOR} value={element}
                        status={checked === element ? "checked" : "unchecked"}
                        onPress={() => onOptionSelect(element)} />    
                    <Text>{element}</Text>
                </View>
            ) }
        </View>
    );
} 

export default RadioButtonComponent;