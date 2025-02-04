import { Text } from "react-native";
import MathButton from "./MathButton";
import { useState } from "react";

interface MathBlockProps {
    min?: number;
    max?: number;
    label?: string;
    showNumber?: boolean;
    onPress?: (count: number) => void;
};

function MathBlock({ min, max, label, showNumber, onPress }: MathBlockProps) {
    label = (label !== undefined) ? label + " " : "";
    onPress ??= () => {};
    showNumber ??= true;
    const [ count, setCount ] = useState(0);

    const mathButtonOnPress = (newCount: number) => {
        setCount(newCount)
        onPress(count);
    }

    return (
        <Text>
            <MathButton operation="-" count={count} setCount={mathButtonOnPress} min={min} />
            { label }
            { showNumber && <Text>{count}</Text> }
            <MathButton operation="+" count={count} setCount={mathButtonOnPress} max={max} />
        </Text>
    )
}

export default MathBlock;