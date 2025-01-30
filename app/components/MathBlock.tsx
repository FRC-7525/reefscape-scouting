import { Text } from "react-native";
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
        <Text>
            <MathButton operation="-" count={count} setCount={setCount} min={min} />
            { label }
            { showNumber && <Text>{count}</Text> }
            <MathButton operation="+" count={count} setCount={setCount} max={max} />
        </Text>
    )
}

export default MathBlock;