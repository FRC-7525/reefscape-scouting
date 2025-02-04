import { Text } from "react-native";
import MathButton from "./MathButton";
import { useEffect, useState } from "react";

interface MathBlockProps {
    min?: number;
    max?: number;
    label?: string;
    showNumber?: boolean;
    onPress?: (count: number) => void;
    oldCount?: Promise<number>;
};

function MathBlock({ min, max, label, showNumber, onPress, oldCount }: MathBlockProps) {
    label = (label !== undefined) ? label + " " : "";
    onPress ??= () => {};
    showNumber ??= true;
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        const getOldCount = async () => {
            setCount(await oldCount ?? 0);
        }

        getOldCount();
    }, []);

    const mathButtonOnPress = (newCount: number) => {
        setCount(newCount)
        onPress(newCount);
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