import { FloatValue } from 'google-protobuf/google/protobuf/wrappers_pb';

import {
  BuildStrategyRequest,
  SaveStrategyRequest,
  StakingPlan,
} from '../proto/strategy_pb';
import {
  ActionEnum,
  LineEnum,
  MeasureEnum,
  MetricEnum,
  ResultEnum,
  SideEnum,
  StakingPlanEnum,
  StatEnum,
  TeamEnum,
  VenueEnum,
  VisibilityEnum,
} from '../proto/enum_pb';
import { ResultFilter, StatFilter } from '../proto/filter_pb';
import { parseFloatValue } from '../utility/strategy';

const convertResultFilters = (filters) => {
  return filters.map((f) => {
    const filter = new ResultFilter();
    filter.setTeam(TeamEnum[f.team.name]);
    filter.setResult(ResultEnum[f.result.name]);
    filter.setGames(parseInt(f.games.name, 10));
    filter.setVenue(VenueEnum[f.venue.name]);
    return filter;
  });
};

const convertStatFilters = (filters) => {
  return filters.map((f) => {
    const filter = new StatFilter();
    filter.setAction(ActionEnum[f.action.name]);
    filter.setGames(parseInt(f.games.name, 10));
    filter.setMeasure(MeasureEnum[f.measure.name]);
    filter.setMetric(MetricEnum[f.metric.name]);
    filter.setStat(StatEnum[f.stat.name]);
    filter.setTeam(TeamEnum[f.team.name]);
    filter.setValue(parseFloat(f.value.name));
    filter.setVenue(VenueEnum[f.venue.name]);
    return filter;
  });
};

const parseOdds = (odds) => {
  return odds !== null
    ? new FloatValue().setValue(parseFloatValue(odds))
    : null;
};

export const buildStrategyRequest = (filters) => {
  const request = new BuildStrategyRequest();

  request.setMarket(filters.market.name);
  request.setRunner(filters.runner.name);
  request.setLine(LineEnum[filters.line.name]);
  request.setSide(SideEnum[filters.side.name]);
  request.setMinOdds(parseOdds(filters.minOdds));
  request.setMaxOdds(parseOdds(filters.maxOdds));
  request.setCompetitionIdsList(filters.competitions);
  request.setResultFiltersList(convertResultFilters(filters.resultFilters));
  request.setStatFiltersList(convertStatFilters(filters.statFilters));

  return request;
};

export const saveStrategyRequest = (
  name,
  description,
  stakingPlan,
  filters,
  visibility
) => {
  const request = new SaveStrategyRequest();
  const plan = new StakingPlan();

  plan.setName(StakingPlanEnum[stakingPlan.name]);
  plan.setValue(stakingPlan.value);

  request.setName(name);
  request.setDescription(description);
  request.setVisibility(VisibilityEnum[visibility]);
  request.setStakingPlan(plan);
  request.setMarket(filters.market.name);
  request.setRunner(filters.runner.name);
  request.setSide(SideEnum[filters.side.name]);
  request.setMinOdds(parseOdds(filters.minOdds));
  request.setMaxOdds(parseOdds(filters.maxOdds));
  request.setCompetitionIdsList(filters.competitions);
  request.setResultFiltersList(convertResultFilters(filters.resultFilters));
  request.setStatFiltersList(convertStatFilters(filters.statFilters));

  return request;
};
