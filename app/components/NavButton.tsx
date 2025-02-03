import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface NavButtonProps {
    text: string;
    pageName?: string;
}

function NavButton({ text, pageName }: NavButtonProps) {
    pageName ??= ""

    return (
        <View style={styles.nav}>
            <SafeAreaView >
                <Link href={"/" + pageName} asChild>
                    <Button textColor="#f5f5f5" buttonColor="#2c2c2c"
                        contentStyle={{ height: 80, width: 80 }}>{text}</Button>
                </Link>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
})

export default NavButton;
