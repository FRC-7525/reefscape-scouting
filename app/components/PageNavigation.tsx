import { StyleSheet, View } from "react-native";
import NavButton from "./NavButton";

interface PageNavigationProps {
    previous?: string;
    next?: string;
};

function PageNavigation({ previous, next }: PageNavigationProps) {
    previous ??= "";
    next ??= "";

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <NavButton text="Back" pageName={previous} />
            </View>

            <View style={styles.nav}>
                <NavButton text="Next" pageName={next} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        columnGap: "10"
    },
    nav: {
        flex: 1,
        justifyContent: "center"
    }
})

export default PageNavigation;