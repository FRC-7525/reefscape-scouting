import { Text, View, StyleSheet } from "react-native";
import React from "react";
import RadioButtonComponent from "../components/RadioButton";
import { Divider } from "react-native-paper";
import { getMatchData, updateClimb } from "../api/data";
import { CLIMB_TYPE } from "../api/data_types";
import SectionTitle from "../components/SectionTitle";

function EndgameView() {
    return (
        <View>
            <Divider />
            <SectionTitle>{"Climb"}</SectionTitle>
           
            <View style={styles.container}>
                <View style={styles.centerRadioButtons}>
                    <RadioButtonComponent data={["Deep Climb", "Shallow Climb", "Park", "Nothing"]}
                        onSelect={(option: string) => {
                            updateClimb(option as CLIMB_TYPE);
                        }}
                        oldSelected={getMatchData().then((data) => data["teleop"]["climb"])}/>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    centerRadioButtons: {
        flex: 1,
        alignItems: 'center'
    }
})

export default EndgameView;