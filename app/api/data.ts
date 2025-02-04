import { DRIVER_STATION, MatchData } from "./data_types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function getMatchData(): Promise<MatchData> {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem("matchData")
            .then((res) => {
                if (res !== null) {
                    resolve(JSON.parse(res) as MatchData);
                } else {
                    console.warn("No match data found - Returning empty object.");
                    resolve(new MatchData());
                }
            }).catch((err) => reject(err));
    })
}

export function saveMatchData(data: MatchData): Promise<void> {
    return AsyncStorage.setItem("matchData", JSON.stringify(data));
}

function modifyMatchData(modifier: (data: MatchData) => MatchData): Promise<void> {
    return new Promise((resolve, reject) => {
        getMatchData().then((data) => {
            resolve(saveMatchData(modifier(data)));
        }).catch((err) => reject(err));
    });
}

export function updateName(name: string): Promise<void> {
    return modifyMatchData((data) => {
        data["scouterName"] = name;
        return data;
    });
}

export function updateMatchNumber(matchNumber: number): Promise<void> {
    return modifyMatchData((data) => {
        data["matchNumber"] = matchNumber;
        return data;
    });
}

export function updateTeamNumber(teamNumber: number): Promise<void> {
    return modifyMatchData((data) => {
        data["teamNumber"] = teamNumber;
        return data;
    });
}

export function updateDriverStation(station: DRIVER_STATION): Promise<void> {
    return modifyMatchData((data) => {
        data["driverStation"] = station;
        return data;
    });
}

export function updateReefScores(phase: "teleop" | "autonomous", level: "L4" | "L3" | "L2" | "L1", score: number): Promise<void> {
    return modifyMatchData((data) => {
        data[phase]["reef"][level] = score;
        return data;
    });
}

export function updateLeftStart(leftStart: boolean): Promise<void> {
    return modifyMatchData((data) => {
        data["autonomous"]["leftStart"] = leftStart;
        return data;
    });
}