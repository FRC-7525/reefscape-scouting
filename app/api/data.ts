import * as FileSystem from 'expo-file-system';
import { MatchData, GamePhase, DRIVER_STATION, START_POSITION, Tag, CLIMB_TYPE } from "./data_types";

const path = FileSystem.documentDirectory ?? "" + "matchData.json";

export function getMatchData(): Promise<MatchData> {
    return new Promise((resolve, reject) => {
        FileSystem.readAsStringAsync(path)
            .then((res) => {
                resolve(JSON.parse(res) as MatchData)
            }).catch((err) => reject(err));
    });
}

export function saveMatchData(newData: MatchData): Promise<void> {
    return FileSystem.writeAsStringAsync(path, JSON.stringify(newData));
}

export function updateMatchData(modifier: (matchData: MatchData) => MatchData): Promise<void> {
    return new Promise((resolve, reject) => {
        getMatchData()
            .then((matchData) => {
                saveMatchData(modifier(matchData));
                resolve();
            }).catch((err) => reject(err));
    });
}

export function updateScore(phase: GamePhase, scoreType: "reef" | "algae", newScores: number[]): Promise<void> {
    return updateMatchData((matchData) => {
        const newScore = matchData[phase]["score"][scoreType].map((score, i) => score + newScores[i]);
        matchData[phase]["score"][scoreType] = newScore;

        return matchData;
    });
}

export function updateReefScore(phase: GamePhase, newScores: number[]): Promise<void> {
    return updateScore(phase, "reef", newScores);
}

export function updateAlgaeScore(phase: GamePhase, newScores: number[]): Promise<void> {
    return updateScore(phase, "algae", newScores);
}

export function updateLeftLine(leftLine: boolean): Promise<void> {
    return updateMatchData((matchData) => { 
        matchData["autonomous"]["left_start"] = leftLine;
        return matchData;
    });
}

export function updateName(name: string): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["scouter_name"] = name;
        return matchData;
    });
}

export function updateNotes(notes: string): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["notes"] = notes;
        return matchData;
    });
}

export function updateTeamNumber(team: number): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["team_number"] = team;
        return matchData;
    });
}

export function updateMatchNumber(match: number): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["match_number"] = match;
        return matchData;
    });
}

export function updateStationLocation(station: DRIVER_STATION): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["driver_station"] = station;
        return matchData;
    });
}

export function updateStartLocation(location: START_POSITION): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["autonomous"]["start_position"] = location;
        return matchData;
    });
}

export function updateTags(tags: Tag[]): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["tags"] = tags;
        return matchData;
    });
}

export function updateClimb(climb: CLIMB_TYPE): Promise<void> {
    return updateMatchData((matchData) => {
        matchData["teleop"]["climb"] = climb;
        return matchData;
    });
}