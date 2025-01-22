import { View, StyleSheet } from "react-native"

function HorizontalLine() {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 1
      }}
    />
  )
}

export default HorizontalLine
