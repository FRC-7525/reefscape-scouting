import { Text, View } from "react-native";
import React from "react";
import RadioButton from "../components/RadioButton";
import { Divider } from "react-native-paper";
import { getMatchData, updateClimb } from "../api/data";
import { CLIMB_TYPE } from "../api/data_types";


function EndgameView() {
    return (
        <View>
            <Text>{"Climb?:"}</Text>
            <RadioButton data={["Deep Climb", "Shallow Climb", "Park", "Nothing"]}
                onSelect={(option: string) => {
                    updateClimb(option as CLIMB_TYPE);
                }}
                oldSelected={getMatchData().then((data) => data["teleop"]["climb"])}/>
            <Divider />
        </View>
    );
}

export default EndgameView;