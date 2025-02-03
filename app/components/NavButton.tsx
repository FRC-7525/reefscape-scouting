import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface NavButtonProps {
    text: string;
    pageName?: string;
}

function NavButton({ text, pageName }: NavButtonProps) {
    pageName ??= ""

    return (
        <SafeAreaView style={styles.nav}>
            <Link href={"/" + pageName} asChild>
                <Button textColor="#f5f5f5" buttonColor="#2c2c2c">{text}</Button>
            </Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    nav: {
        position: 'absolute',
        bottom: 10,
        right: 20,
    }
})

export default NavButton;
