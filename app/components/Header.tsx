import { Text, View, StyleSheet } from "react-native";
import HorizontalLine from "./HorizontalLine";
import { Appbar } from "react-native-paper";
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
            <HorizontalLine />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    centerText: {
        textAlign: "center",
        fontSize: 22
    },
    rightText: {
        textAlign: "right",
        fontSize: 22
    },
})

export default PageHeader;
