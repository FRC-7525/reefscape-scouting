import { View } from "react-native";
import MathBlock from "../components/MathBlock";
import SectionTitle from "../components/SectionTitle";
import { Divider } from "react-native-paper";

function AlgaeView() {
    return (
        <View>
            <Divider />
            <SectionTitle>Algae</SectionTitle>

            <MathBlock min={0} label="Net" />
            <MathBlock min={0} label="Processor" />
        </View>
    )
}

export default AlgaeView;