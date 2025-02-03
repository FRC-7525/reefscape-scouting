import { Dispatch, SetStateAction } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

interface MathButtonProps {
    operation: "+" | "-";
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    min?: number;
    max?: number;
};

function MathButton({ operation, count, setCount, min, max }: MathButtonProps) {
    return (
        <View style={[{ flex: 4 }]}>
            <Button textColor="#f5f5f5" buttonColor="#2c2c2c"
                contentStyle={{ height: 45 }}
                onPress={() => {
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
            }}>{operation}</Button>
        </View>
    )
}

export default MathButton;