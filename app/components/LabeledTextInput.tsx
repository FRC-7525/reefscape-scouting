import { Text, View, StyleSheet, NativeSyntheticEvent, TextInputEndEditingEventData } from "react-native";
import { TextInput } from "react-native-paper";

interface LabeledTextInputProps {
    label?: string;
    editable?: boolean;
    placeholder?: string;
    inputMode?: "text" | "numeric";
    submit?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
}

function LabeledTextInput({ label, editable, placeholder, inputMode, submit }: LabeledTextInputProps) {
    inputMode ??= "text";
    return (
        <View>
            { (label !== undefined) && <Text>{label}</Text> }

            <TextInput editable={editable} style={styles.input}
                       placeholder={placeholder} placeholderTextColor={"#bbb"}
                       mode="outlined" onEndEditing={submit}
                       inputMode={inputMode} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "50%"
    }
})

export default LabeledTextInput;
