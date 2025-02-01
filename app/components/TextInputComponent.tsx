import { Text, View, StyleSheet } from "react-native";

interface TextInputProps {
    label?: string;
    id?: string;
    editable?: boolean;
    placeholder?: string;
}

function TextInputComponent({ label, id, editable, placeholder }: TextInputProps) {
    var hideLabel = false

    if (label == undefined) {
        hideLabel = true
    }

    if (editable != undefined) {
        editable = !editable;
    }

    return (
        <View style={styles.container}>
            { !hideLabel &&
                <Text>{label} </Text>
            }

            <input type="text" disabled={editable} style={styles.input} placeholder={placeholder}></input>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200
        // flex: 1,
        // width: 10
    },
    input: {
        // flex: 1
    }
})

export default TextInputComponent;
