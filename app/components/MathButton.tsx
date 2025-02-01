import { Dispatch, SetStateAction } from "react";
import { Button } from "react-native";

interface MathButtonProps {
    operation: "+" | "-";
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    min?: number;
    max?: number;
};

function MathButton({ operation, count, setCount, min, max }: MathButtonProps) {
    return (
        <Button title={operation} onPress={() => {
            if (operation == "-") {
                setCount(count - 1);

                if (min !== undefined && count <= min) {
                    setCount(min); 
                }
            } else {
                setCount(count + 1);

                if (max !== undefined && count >= max) {
                    setCount(max);
                }
            }
        }} />
    )
}

export default MathButton;
