import { View, Text } from "react-native";
import HorizontalLine from "../components/HorizontalLine";
import MathBlock from "../components/MathBlock";
import SectionTitle from "../components/SectionTitle";

function AlgaeView() {
    return (
        <View>
            <HorizontalLine />
            <SectionTitle>Algae</SectionTitle>

            <MathBlock min={0} label="In Net" />
            <MathBlock min={0} label="In Processor" />
        </View>
    )
}

export default AlgaeView;