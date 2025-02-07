import { View } from "react-native";
import { Appbar, Divider } from "react-native-paper";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { getMatchData } from "../api/data";

interface PageHeaderProps {
    title: string;
    pageNumber: string;
    previous?: string;
}

function PageHeader({ title, pageNumber, previous }: PageHeaderProps) {
    const [ teamNumber, setTeamNumber ] = useState("");
    const [ iconColor, setIconColor ] = useState("");

    useEffect(() => {
        getMatchData().then((data) => {
            if (data["teamNumber"] !== 0) {
                setTeamNumber(data["teamNumber"].toString());
            }

            if (data["driverStation"].includes("Red")) {
                setIconColor("#f54242");
            } else {
                setIconColor("#4242f5");
            }
        });
    }, []);

    return (
        <View>
            <Appbar.Header>
                { previous !== undefined && <Link href={previous} asChild>
                    <Appbar.BackAction />
                </Link> }
                <Appbar.Content title={`${title} (${pageNumber})`} />
                <Appbar.Content title={teamNumber} />
                <Appbar.Action icon="robot" color={iconColor} />
            </Appbar.Header>
            <Divider />
        </View>
    )
}

export default PageHeader;
