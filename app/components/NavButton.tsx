import { Link } from 'expo-router';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BACKGROUND_COLOR, TEXT_COLOR } from '../consts';

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
                <Button textColor={TEXT_COLOR} buttonColor={BACKGROUND_COLOR}
                    contentStyle={{ height: 80, width: 80 }}>{text}</Button>
            </Link>
        </View>
    )
}

export default NavButton;
