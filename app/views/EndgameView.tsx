import { Text, View } from "react-native";
import React from "react";
import RadioButtonComponent from "../components/RadioButtonComponent";
import Separator from "../components/Separator";

function EndgameView() {
    const data = [
        { label: "Deep Climb", value: 0 },
        { label: "Shallow Climb", value: 1 },
        { label: "Park", value: 2 },
        { label: "Nothing", value: 3 },
    ];

    return (
        <View>
            <Text> {"Climb?:"}</Text>
            <RadioButtonComponent data={data} />
            <Separator />
        </View>
    );
}

export default EndgameView;