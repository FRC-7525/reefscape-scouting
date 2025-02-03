import { Dispatch, SetStateAction } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

interface MathButtonProps {
    operation: "+" | "-";
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    min?: number;
    max?: number;
};

function MathButton({ operation, count, setCount, min, max }: MathButtonProps) {
    return (
        <View style={[{ flex: 2 }]}>
            <TouchableOpacity style={styles.button} onPress={() => {
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
            }}>
                <Text style={styles.text}>{operation}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2c2c2c",
        borderRadius: 8,
        height: 38,
        justifyContent: "center"
    },
    text: {
        color: "#f5f5f5",
        fontSize: 20,
        textAlign: "center"
    }
});

export default MathButton;