import { View } from "react-native";
import MathBlock from "../components/MathBlock";
import SectionTitle from "../components/SectionTitle";
import { Divider } from "react-native-paper";
import { getMatchData, updateAlgaeScore } from "../api/data";
import { AlgaeLevel, GamePhase } from "../api/data_types";

interface AlgaeViewProps {
    phase: GamePhase;
}

function AlgaeView({ phase }: AlgaeViewProps) {
    const getOldCount = (location: AlgaeLevel) => {
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