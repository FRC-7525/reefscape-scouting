import { Text, View } from "react-native";
import React from "react";
import RadioButtonComponent from "../components/RadioButton";
import { Divider } from "react-native-paper";

function EndgameView() {
    return (
        <View>
            <Text>{"Climb?:"}</Text>
            <RadioButtonComponent data={["Deep Climb", "Shallow Climb", "Park", "Nothing"]} />
            <Divider />
        </View>
    );
}

export default EndgameView;