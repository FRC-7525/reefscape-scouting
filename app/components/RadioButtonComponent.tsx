import RadioForm from 'react-native-simple-radio-button';
import { View } from 'react-native'
import { useState } from 'react'

interface RadioButtonComponentProps {
    data: {
        label: string;
        value: number
    }[];
}

function RadioButtonComponent({ data }: RadioButtonComponentProps) {
    const [value, setValue] = useState<number>(data[0]?.value || 0);
    return (
        <View>
            <RadioForm
                radio_props={data}
                initial={value}
                onPress={(value) => setValue(value)} />
        </View>
    );
} 

export default RadioButtonComponent;