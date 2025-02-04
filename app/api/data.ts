import { MatchData } from "./data_types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function getMatchData(): Promise<MatchData> {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem("matchData")
            .then((res) => {
                if (res !== null) {
                    resolve(JSON.parse(res) as MatchData);
                }
                
                resolve(new MatchData());
            }).catch((err) => reject(err));
    })
}

export function saveMatchData(data: MatchData): Promise<void> {
    return AsyncStorage.setItem("matchData", JSON.stringify(data));
}

function modifyMatchData(modifier: (data: MatchData) => MatchData): Promise<void> {
    return new Promise((resolve, reject) => {
        getMatchData().then((data) => {
            resolve( saveMatchData(modifier(data)));
        }).catch((err) => reject(err));
    });
}

export function updateName(name: string): Promise<void> {
    return modifyMatchData((data) => {
        data.scouterName = name;
        return data;
    });
}