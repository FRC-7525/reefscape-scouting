import { StyleSheet, Text, View } from "react-native";
import MathButton from "./MathButton";
import { useState } from "react";
import { Chip } from "react-native-paper";

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
            <Text style={styles.text}>{ label }</Text>
            { showNumber && <Chip style={styles.chip}>{count}</Chip> }
            <MathButton operation="+" count={count} setCount={setCount} max={max} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10
    },
    text: {
        flex: 3,
        textAlign: "center",
    },
    chip: {
    }
})

export default MathBlock;