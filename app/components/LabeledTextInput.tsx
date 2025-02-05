import { useEffect, useState } from "react";
import { Text, TouchableWithoutFeedback, Keyboard, StyleSheet, NativeSyntheticEvent, TextInputEndEditingEventData, View } from "react-native";
import { TextInput } from "react-native-paper";

interface LabeledTextInputProps {
    label?: string;
    editable?: boolean;
    placeholder?: string;
    inputMode?: "text" | "numeric";
    multiline?: boolean;
    oldValue?: Promise<string>;
    submit?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
}

function LabeledTextInput({ label, editable, placeholder, inputMode, multiline, oldValue, submit }: LabeledTextInputProps) {
    inputMode ??= "text";
    const [ value, setValue ] = useState("");

    useEffect(() => {
        const getOldValue = async () => {
            let old = await oldValue ?? "";

            if (old === "0" && inputMode === "numeric") {
                old = "";
            }

            setValue(old);
        }

        getOldValue();
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                { (label !== undefined) && <Text>{label}</Text> }

                <TextInput editable={editable} style={styles.input}
                        placeholder={placeholder} placeholderTextColor={"#bbb"}
                        mode="outlined" onEndEditing={submit}
                        inputMode={inputMode} multiline={multiline}
                        onChangeText={(text) => setValue(text)} value={value} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "50%"
    }
})

export default LabeledTextInput;
