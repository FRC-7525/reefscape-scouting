export enum DRIVER_STATION {
    RED_ONE = "Red 1",
    RED_TWO = "Red 2",
    RED_THREE = "Red 3",
    BLUE_ONE = "Blue 1",
    BLUE_TWO = "Blue 2",
    BLUE_THREE = "Blue 3",
};

export enum START_POSITION {
    SCORING_TABLE = "Scoring Table Side",
    CENTER = "Center",
    AUDIENCE = "Audience Side",
};

export enum CLIMB_TYPE {
    DEEP_CLIMB = "Deep Climb",
    SHALLOW_CLIMB = "Shallow Climb",
    PARK = "Park",
    NO_CLIMB = "No Climb",
};

export interface Score {
    reef: number[];
    algae: number[];
}

export interface AutoData {
    left_start: boolean;
    start_position: START_POSITION;
    score: Score;
}

export interface TeleopData {
    climb: CLIMB_TYPE;
    score: Score;
}

export interface MatchData {
    scouter_name: string;
    team_number: number;
    match_number: number;
    driver_station: DRIVER_STATION;
    autonomous: AutoData;
    teleop: TeleopData;
    notes: string;
    tags: Tag[];
}

export type GamePhase = "teleop" | "autonomous";
export type Tag = "tag1" | "tag2";