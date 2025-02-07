import { View } from "react-native";
import { Appbar, Chip, Divider } from "react-native-paper";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { getMatchData } from "../api/data";
import { BACKGROUND_COLOR, TEXT_COLOR } from "../consts";

interface PageHeaderProps {
    title: string;
    pageNumber: string;
    previous?: string;
}

function PageHeader({ title, pageNumber, previous }: PageHeaderProps) {
    const [ teamNumber, setTeamNumber ] = useState("7525");
    const [ chipColor, setChipColor ] = useState(BACKGROUND_COLOR);

    useEffect(() => {
        getMatchData().then((data) => {
            if (data["teamNumber"] !== 0) {
                setTeamNumber(data["teamNumber"].toString());
            }

            if (data["driverStation"].includes("Red")) {
                setChipColor("#f54242");
            } else {
                setChipColor("#5252aa");
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
                <Appbar.Content style={{alignItems: "center"}} title={
                    <Chip style={{ backgroundColor: chipColor }} textStyle={{ color: TEXT_COLOR }}>
                        {teamNumber}
                    </Chip>
                } />
            </Appbar.Header>
            <Divider />
        </View>
    )
}

export default PageHeader;
