import * as FileSystem from 'expo-file-system';
import { MatchData, GamePhase, DRIVER_STATION, START_POSITION, Tag, CLIMB_TYPE } from "./data_types";

const path = FileSystem.documentDirectory + "matchData.json";

function getMatchData(): Promise<MatchData> {
    return new Promise((resolve, reject) => {
        FileSystem.readAsStringAsync(path)
            .then((res) => {
                resolve(JSON.parse(res) as MatchData)
            }).catch((err) => reject(err));
    });
}

function saveMatchData(newData: MatchData): Promise<void> {
    return new Promise((resolve, reject) => {
        FileSystem.writeAsStringAsync(path, JSON.stringify(newData))
            .then(resolve)
            .catch((err) => reject(err));
    })
}

function updateMatchData(modifier: (matchData: MatchData) => MatchData): Promise<void> {
    return new Promise((resolve, reject) => {
        getMatchData()
            .then((matchData) => {
                saveMatchData(modifier(matchData));
                resolve();
            }).catch((err) => reject(err));
    });
}

function updateScore(phase: GamePhase, scoreType: "reef" | "algae", newScores: number[]): Promise<void> {
    return updateMatchData((matchData) => {
        const newScore = matchData[phase]["score"][scoreType].map((score, i) => score + newScores[i]);
        matchData[phase]["score"][scoreType] = newScore;

        return matchData;
    });
}

function updateReefScore(phase: GamePhase, newScores: number[]): Promise<void> {
    return updateScore(phase, "reef", newScores);
}

function updateAlgaeScore(phase: GamePhase, newScores: number[]): Promise<void> {
    return updateScore(phase, "algae", newScores);
}

function updateLeftLine(leftLine: boolean): Promise<void> {
    return updateMatchData((matchData) => { 
        matchData["autonomous"]["left_start"] = leftLine;
        return matchData;
    });
}

function updateName(name: string): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["scouter_name"] = name;
        return matchData;
    });
}

function updateNotes(notes: string): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["notes"] = notes;
        return matchData;
    });
}

function updateTeamNumber(team: number): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["team_number"] = team;
        return matchData;
    });
}

function updateMatchNumber(match: number): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["match_number"] = match;
        return matchData;
    });
}

function updateStationLocation(station: DRIVER_STATION): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["driver_station"] = station;
        return matchData;
    });
}

function updateStartLocation(location: START_POSITION): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["autonomous"]["start_position"] = location;
        return matchData;
    });
}

function updateTags(tags: Tag[]): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["tags"] = tags;
        return matchData;
    });
}

function updateClimb(climb: CLIMB_TYPE): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["teleop"]["climb"] = climb;
        return matchData;
    });
}

export { getMatchData, saveMatchData, updateAlgaeScore, updateClimb,
         updateLeftLine, updateMatchNumber, updateName, updateNotes,
         updateReefScore, updateStartLocation, updateStationLocation,
         updateTags, updateTeamNumber };