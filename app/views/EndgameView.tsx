import { Text, View } from "react-native";
import React from "react";
import RadioButtonComponent from "../components/RadioButtonComponent";
import HorizontalLine from "../components/HorizontalLine";
import { updateClimb } from "../api/data";
import { CLIMB_TYPE } from "../api/data_types";

function EndgameView() {
    return (
        <View>
            <Text>{"Climb?:"}</Text>
            <RadioButtonComponent data={["Deep Climb", "Shallow Climb", "Park", "Nothing"]}
                onSelect={(option: string) => {
                    updateClimb(option as CLIMB_TYPE);
                }} />
            <HorizontalLine />
        </View>
    );
}

export default EndgameView;