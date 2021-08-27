export type Season = {
  id: number;
  name: string;
};

export type Team = {
  id: number;
  name: string;
  logo: string;
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
