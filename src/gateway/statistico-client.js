import {
  BoolValue,
  StringValue,
  UInt64Value,
} from 'google-protobuf/google/protobuf/wrappers_pb';
import { TeamSeasonsRequest } from '../proto/season_pb';
import { CompetitionTeamsRequest } from '../proto/team_pb';
import { TeamRatingRequest } from '../proto/ratings_pb';
import { SeasonClient, TeamClient, TeamRatingClient } from './grpc-client';

export const getCompetitionTeams = (competitionIds, onSuccess) => {
  const request = new CompetitionTeamsRequest();
  request.setCompetitionIdsList(competitionIds);

  TeamClient().getTeamsByCompetitionId(request, {}, (err, res) => {
    if (err) {
      throw new Error(err.message);
    }

    const teams = res.getTeamsList().map((t) => {
      return {
        id: t.getId(),
        name: t.getName(),
        logo: t.getLogo().getValue(),
      };
    });

    onSuccess(teams);
  });
};

export const getTeamSeasons = (teamId, includeCup, sort, onSuccess) => {
  console.log(sort);
  const request = new TeamSeasonsRequest();
  request.setTeamId(teamId);
  request.setIncludeCup(new BoolValue().setValue(includeCup));
  request.setSort(new StringValue().setValue(sort));

  SeasonClient().getSeasonsForTeam(request, {}, (err, res) => {
    if (err) {
      throw new Error(err.message);
    }

    const seasons = res.getSeasonsList().map((s) => {
      return {
        id: s.getId(),
        name: s.getName(),
      };
    });

    console.log(seasons);

    onSuccess(seasons);
  });
};

export const getTeamRatings = (teamId, seasonId, sort, onSuccess) => {
  const request = new TeamRatingRequest();
  request.setTeamId(teamId);
  request.setSeasonId(new UInt64Value().setValue(seasonId));
  request.setSort(sort);

  TeamRatingClient().getTeamRatings(request, {}, (err, res) => {
    if (err) {
      throw new Error(err.message);
    }

    const ratings = res.getRatingsList().map((r) => {
      return {
        attackTotal: r.getAttack().getPoints(),
        attackDifference: r.getAttack().getDifference(),
        defenceTotal: r.getDefence().getPoints(),
        defenceDifference: r.getDefence().getDifference(),
        fixtureId: r.getFixtureId(),
        teamId: r.getTeamId(),
        timestamp: r.getTimestamp().toLocaleString(),
      };
    });

    onSuccess(ratings);
  });
};
