import { FloatValue } from 'google-protobuf/google/protobuf/wrappers_pb';

import { BuildStrategyRequest } from '../proto/requests_pb';
import {
  ActionEnum,
  LineEnum,
  MeasureEnum,
  MetricEnum,
  ResultEnum,
  SideEnum,
  StatEnum,
  TeamEnum,
  VenueEnum,
} from '../proto/enum_pb';
import { ResultFilter, StatFilter } from '../proto/filter_pb';
import { parseFloatValue } from '../utility/strategy';

const strategyTradeRequest = (filters) => {
  const request = new BuildStrategyRequest();

  const minOdds =
    filters.minOdds !== null
      ? new FloatValue().setValue(parseFloatValue(filters.minOdds))
      : null;
  const maxOdds =
    filters.maxOdds !== null
      ? new FloatValue().setValue(parseFloatValue(filters.maxOdds))
      : null;

  const resultFilters = filters.resultFilters.map((f) => {
    const filter = new ResultFilter();
    filter.setTeam(TeamEnum[f.team.name]);
    filter.setResult(ResultEnum[f.result.name]);
    filter.setGames(parseInt(f.games.name, 10));
    filter.setVenue(VenueEnum[f.venue.name]);
    return filter;
  });

  const statFilters = filters.statFilters.map((f) => {
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

  request.setMarket(filters.market.name);
  request.setRunner(filters.runner.name);
  request.setLine(LineEnum[filters.line.name]);
  request.setSide(SideEnum[filters.side.name]);
  request.setMinOdds(minOdds);
  request.setMaxOdds(maxOdds);
  request.setCompetitionIdsList(filters.competitions);
  request.setResultFiltersList(resultFilters);
  request.setStatFiltersList(statFilters);

  return request;
};

export default strategyTradeRequest;
