import { Link } from 'expo-router';
import { Button, View } from 'react-native';

interface NavButtonProps {
    text: string;
    pageName?: string;
}

function NavButton({ text, pageName }: NavButtonProps) {
    pageName ??= ""

    return (
        <View>
            <Link href={"/" + pageName} asChild>
                <Button title={text}></Button>
            </Link>
        </View>
    )
}

export default NavButton;
