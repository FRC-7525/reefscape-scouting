import { Link } from 'expo-router';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface NavButtonProps {
    text: string;
    pageName?: string;
}

function NavButton({ text, pageName }: NavButtonProps) {
    pageName ??= ""

    return (
        <View>
            <Link href={"/" + pageName} asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2c2c2c",
        borderRadius: 8,
        justifyContent: "center",
        height: 27
    },
    text: {
        color: "#f5f5f5",
        textAlign: "center"
    }
})

export default NavButton;
