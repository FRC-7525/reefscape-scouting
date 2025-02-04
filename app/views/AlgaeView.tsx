import { View } from "react-native";
import MathBlock from "../components/MathBlock";
import SectionTitle from "../components/SectionTitle";
import { Divider } from "react-native-paper";
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
            <Divider />
            <SectionTitle>Algae</SectionTitle>

            <MathBlock min={0} label="Net" onPress={(count: number) => {
                updateAlgaeScore(phase, "net", count);
            }} oldCount={getOldCount("net")} />
            <MathBlock min={0} label="Processor" onPress={(count: number) => {
                updateAlgaeScore(phase, "processor", count);
            }} oldCount={getOldCount("processor")} />
        </View>
    )
}

export default AlgaeView;