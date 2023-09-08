export type Match = {
  matchId: number;
  startDate: Date;
  players: Player[];
  matchEvents: MatchEvent[];
  pointEvents: PointEvent[];
};

export type Player = {
  id: number;
  name: string;
};

export enum MatchEventType {
  MATCH_INITIALIZE = "MATCH_INITIALIZE",
  MATCH_START = "MATCH_START",
  MATCH_ENDED = "MATCH_ENDED",
}

export enum PointEventType {
  POINT = "POINT",
  ADVANTAGE = "ADVANTAGE",
  WARNING = "WARNING",
  SUBMISSION = "SUBMISSION",
}

export type MatchEvent = {
  timestamp: Date;
  matchId: number;
  inGameTime: number;
  type: MatchEventType;
};

export type PointEvent = {
  timestamp: Date;
  matchId: number;
  inGameTime: number;
  type: PointEventType;
  playerId: number;
  value: number;
};
