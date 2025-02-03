import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface LabeledTextInputProps {
    label?: string;
    editable?: boolean;
    placeholder?: string;
}

function LabeledTextInput({ label, editable, placeholder }: LabeledTextInputProps) {
    return (
        <View>
            { (label !== undefined) && <Text>{label}</Text> }

            <TextInput editable={editable} style={styles.input}
                       placeholder={placeholder} placeholderTextColor={"#bbb"}
                       mode="outlined" />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "50%"
    }
})

export default LabeledTextInput;
