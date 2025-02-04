import { View, Text } from "react-native";
import HorizontalLine from "../components/HorizontalLine";
import MathBlock from "../components/MathBlock";
import SectionTitle from "../components/SectionTitle";
import { getMatchData, updateAlgaeScore } from "../api/data";

interface AlgaeViewProps {
    phase: "teleop" | "autonomous";
}

function AlgaeView({ phase }: AlgaeViewProps) {
    const getOldCount = (location: "net" | "processor") => {
        return getMatchData().then((data) => data[phase]["algae"][location]);
    }

    return (
        <View>
            <HorizontalLine />
            <SectionTitle>Algae</SectionTitle>

            <MathBlock min={0} label="In Net" onPress={(count: number) => {
                updateAlgaeScore(phase, "net", count);
            }} oldCount={getOldCount("net")} />
            <MathBlock min={0} label="In Processor" onPress={(count: number) => {
                updateAlgaeScore(phase, "processor", count);
            }} oldCount={getOldCount("processor")} />
        </View>
    )
}

export default AlgaeView;