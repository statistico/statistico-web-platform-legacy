export type Result = {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  homeGoals: number;
  awayGoals: number;
  date: Date;
};

export type Season = {
  id: number;
  name: string;
};

export type Team = {
  id: number;
  name: string;
  logo: string | null;
};

export type TeamRating = {
  attackTotal: number;
  attackDifference: number;
  defenceTotal: number;
  defenceDifference: number;
  fixtureId: number;
  teamId: number;
  timestamp: number;
};
