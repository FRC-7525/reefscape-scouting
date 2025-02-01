import { View } from "react-native";
import HorizontalLine from "../components/HorizontalLine";
import MathBlock from "../components/MathBlock";

function AlgaeView() {
    return (
        <View>
            <HorizontalLine />

            <MathBlock min={0} label="In Net" />
            <MathBlock min={0} label="In Processor" />
        </View>
    )
}

export default AlgaeView;