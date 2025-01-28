export enum DRIVER_STATION {
    RED_ONE = 0,
    RED_TWO,
    RED_THREE,
    BLUE_ONE,
    BLUE_TWO,
    BLUE_THREE,
};

export enum START_POSITION {
    SCORING_TABLE = 0,
    CENTER,
    AUDIENCE,
};

export enum CLIMB_TYPE {
    DEEP_CLIMB = 0,
    SHALLOW_CLIMB,
    PARK,
    NO_CLIMB,
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