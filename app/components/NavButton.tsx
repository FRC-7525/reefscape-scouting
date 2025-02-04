import { Link } from 'expo-router';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface NavButtonProps {
    text: string;
    pageName?: string;
}

function NavButton({ text, pageName }: NavButtonProps) {
    pageName ??= ""
    const insets = useSafeAreaInsets();

    return (
        <View style={[{
            position: "absolute",
            bottom: 20 + insets.bottom,
            right: 20 + insets.right
        }]}>
            <Link href={"/" + pageName} asChild>
                <Button textColor="#f5f5f5" buttonColor="#2c2c2c"
                    contentStyle={{ height: 80, width: 80 }}>{text}</Button>
            </Link>
        </View>
    )
}

export default NavButton;
