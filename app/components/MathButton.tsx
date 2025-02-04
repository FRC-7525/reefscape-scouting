import { Dispatch, SetStateAction } from "react";
import { Button } from "react-native";

interface MathButtonProps {
    operation: "+" | "-";
    count: number;
    setCount: (newCount: number) => void;
    min?: number;
    max?: number;
};

function MathButton({ operation, count, setCount, min, max }: MathButtonProps) {
    return (
        <Button title={operation} onPress={() => {
            if (operation == "-") {
                let newCount = count - 1

                if (min !== undefined && count <= min) {
                    newCount = min;
                }

                setCount(newCount);
            } else {
                let newCount = count + 1

                if (max !== undefined && count >= max) {
                    newCount = max;
                }

                setCount(newCount);
            }
        }} />
    )
}

export default MathButton;
