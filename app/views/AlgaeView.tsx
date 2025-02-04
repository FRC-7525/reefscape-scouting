import { View, Text } from "react-native";
import HorizontalLine from "../components/HorizontalLine";
import MathBlock from "../components/MathBlock";
import SectionTitle from "../components/SectionTitle";
import { updateAlgaeScore } from "../api/data";

interface AlgaeViewProps {
    phase: "teleop" | "autonomous";
}

function AlgaeView({ phase }: AlgaeViewProps) {
    return (
        <View>
            <HorizontalLine />
            <SectionTitle>Algae</SectionTitle>

            <MathBlock min={0} label="In Net" onPress={(count: number) => {
                updateAlgaeScore(phase, "net", count);
            }} />
            <MathBlock min={0} label="In Processor" onPress={(count: number) => {
                updateAlgaeScore(phase, "processor", count);
            }} />
        </View>
    )
}

export default AlgaeView;