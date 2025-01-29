import { Text, View, StyleSheet, TextInput } from "react-native";

interface LabeledTextInputProps {
  label?: string;
  id?: string;
  editable?: boolean;
  placeholder?: string;
}

function LabeledTextInput({ label, id, editable, placeholder }: LabeledTextInputProps) {
  let hideLabel = false

  if (label == undefined) {
    hideLabel = true
  }

  return (
    <View>
      { !hideLabel &&
        <Text>{label} </Text>
      }

      <TextInput editable={editable} style={styles.input} placeholder={placeholder} placeholderTextColor={"#bbb"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    width: 200,
    height: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 6
  }
})

export default LabeledTextInput;
