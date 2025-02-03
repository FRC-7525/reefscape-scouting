import { View, Text } from 'react-native'
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';

interface RadioButtonComponentProps {
    data: string[];
}

function RadioButtonComponent({ data }: RadioButtonComponentProps) {
    const [ checked, setChecked ] = useState(data[0]);
    return (
        <View>
            { data.map((element) =>
                <View key={element} style={[{ flexDirection: "row", alignItems: "center" }]}>
                    <RadioButton.Android color="#2c2c2c" value={element}
                        status={checked === element ? "checked" : "unchecked"}
                        onPress={() => setChecked(element)} />    
                    <Text>{element}</Text>
                </View>
            ) }
        </View>
    );
} 

export default RadioButtonComponent;