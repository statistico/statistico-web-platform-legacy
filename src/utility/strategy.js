import { StrategyTradeSearchRequest } from '../proto/strategy_pb';

const parseFloatValue = (prop) => {
  if (prop == null) {
    return null;
  }

  const { name } = prop;

  return parseFloat(name);
};

const parseStringValue = (prop) => {
  if (prop == null) {
    return null;
  }

  const { name } = prop;

  return name;
};

const strategyRequestFromFilters = (filters) => {
  const request = new StrategyTradeSearchRequest();
  request.setMarket(parseStringValue(filters.market));
  request.setRunner(parseStringValue(filters.runner));
  request.setLine(parseStringValue(filters.line));
  // request.setMinOdds(parseFloatValue(filters.minOdds));
  // request.setMaxOdds(parseFloatValue(filters.maxOdds));
  request.setCompetitionIdsList(filters.competitions.map((f) => f.value));

  return request;
  // return {
  //   competitionIds: filters.competitions.map((f) => f.value),
  //   marketRunnerFilter: {
  //     name: parseStringValue(filters.runner),
  //     line: parseStringValue(filters.line),
  //   },
  //   market: parseStringValue(filters.market),
  //   // maxOdds: parseFloatValue(filters.maxOdds),
  //   // minOdds: parseFloatValue(filters.minOdds),
  //   resultFilters: filters.resultFilters.map((f) => {
  //     return {
  //       team: f.team.name,
  //       result: f.result.name,
  //       games: parseInt(f.games.name, 10),
  //       venue: f.venue.name,
  //     };
  //   }),
  //   statFilters: filters.statFilters.map((f) => {
  //     return {
  //       action: f.action.name,
  //       games: parseInt(f.games.name, 10),
  //       measure: f.measure.name,
  //       metric: f.metric.name,
  //       stat: f.stat.name,
  //       team: f.team.name,
  //       value: parseFloat(f.value.name),
  //       venue: f.venue.name,
  //     };
  //   }),
  // };
};

export default strategyRequestFromFilters;
