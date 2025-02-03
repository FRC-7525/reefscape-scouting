import { StyleSheet, Text, View } from "react-native";
import MathButton from "./MathButton";
import { useState } from "react";

interface MathBlockProps {
    min?: number;
    max?: number;
    label?: string;
    showNumber?: boolean;
};

function MathBlock({ min, max, label, showNumber }: MathBlockProps) {
    label = (label !== undefined) ? label + " " : "";
    showNumber ??= true;
    const [ count, setCount ] = useState(0);

    return (
        <View style={styles.container}>
            <MathButton operation="-" count={count} setCount={setCount} min={min} />
            <Text style={styles.text}>{ label }{ showNumber && <Text>{count}</Text> }</Text>
            <MathButton operation="+" count={count} setCount={setCount} max={max} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 2,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        flex: 1,
        textAlign: "center",
        margin: 3
    }
})

export default MathBlock;