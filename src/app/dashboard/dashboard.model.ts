export interface CompetitionsResponse {
    count: number;
    filters: any;
    competitions: Competition[];
}

export interface CompetitionAndTeamsResponse {
    count: number;
    filters: any;
    competition: Competition;
    season: Season;
    teams: Team[];
}

export const PlanTiers: Record<string, number>  = {
    'TIER_ONE': 1,
    'TIER_TWO': 2,
    'TIER_THREE': 3,
    'TIER_FOUR': 4
}

export interface Competition {
    id: number;
    area: Area;
    name: string;
    code: string;
    plan: string;
    currentSeason: Season;
    numberOfAvailableSeasons: number;
    lastUpdated: string;
    planTier: number;
    seasons: Season[];
    teams: Team[];
}

export interface Area {
    id: number;
    name: string;
    countryCode: string;
    ensignUrl: string;
}

export interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: Team;
}

export interface Team {
    id: number;
    address: string;
    area: Area;
    clubColors: string;
    crestUrl: string;
    email: string;
    founded: number;
    lastUpdated: string;
    name: string;
    phone: string;
    shortName: string;
    tla: string;
    venue: string;
    website: string;
    squad: Player[];
}

export interface Player {
    countryOfBirth: string;
    dateOfBirth: string;
    id: number
    name: string;
    nationality: string;
    position: string;
    role: string;
}
