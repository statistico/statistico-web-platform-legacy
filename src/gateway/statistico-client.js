import { CompetitionTeamsRequest } from '../proto/team_pb';
import { TeamClient } from './grpc-client';

const getCompetitionTeams = (competitionIds, onSuccess, onFailure) => {
  const request = new CompetitionTeamsRequest();
  request.setCompetitionIdsList(competitionIds);

  TeamClient().getTeamsByCompetitionId(request, {}, (err, res) => {
    if (err) {
      onFailure(err.message);
      return;
    }

    const teams = res.getTeamsList().map((t) => {
      return {
        id: t.getId(),
        name: t.getName(),
        logo: t.getLogo(),
      };
    });

    onSuccess(teams);
  });
};

export default getCompetitionTeams;
