import {
  BoolValue,
  StringValue,
} from 'google-protobuf/google/protobuf/wrappers_pb';
import { CompetitionTeamsRequest } from '../proto/team_pb';
import { TeamSeasonsRequest } from '../proto/season_pb';
import { SeasonClient, TeamClient } from './grpc-client';

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

    onSuccess(seasons);
  });
};
