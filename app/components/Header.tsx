import { View } from "react-native";
import { Appbar, Divider } from "react-native-paper";
import { Link } from "expo-router";

interface PageHeaderProps {
    title: string;
    pageNumber: string;
    previous?: string;
}

function PageHeader({ title, pageNumber, previous }: PageHeaderProps) {
    return (
        <View>
            <Appbar.Header>
                { previous !== undefined && <Link href={previous} asChild>
                    <Appbar.BackAction />
                </Link> }
                <Appbar.Content title={`${title} (${pageNumber})`} />
            </Appbar.Header>
            <Divider />
        </View>
    )
}

export default PageHeader;
