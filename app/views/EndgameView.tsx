import { Text, View } from "react-native";
import React from "react";
import RadioButtonComponent from "../components/RadioButtonComponent";
import HorizontalLine from "../components/HorizontalLine";

function EndgameView() {
    return (
        <View>
            <Text>{"Climb?:"}</Text>
            <RadioButtonComponent data={["Deep Climb", "Shallow Climb", "Park", "Nothing"]} />
            <HorizontalLine />
        </View>
    );
}

export default EndgameView;