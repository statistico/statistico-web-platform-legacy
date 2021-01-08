import React, { useState, createContext } from 'react';
import { node } from 'prop-types';

export const StrategyBuilderFilterContext = createContext(null);

const StrategyBuilderFilterContextProvider = (props) => {
  const { children } = props;
  const [competitions, setCompetitions] = useState([]);
  const [line, setLine] = useState(null);
  const [market, setMarket] = useState(null);
  const [runner, setRunner] = useState(null);
  const [minOdds, setMinOdds] = useState(null);
  const [maxOdds, setMaxOdds] = useState(null);
  const [resultFilters, setResultFilters] = useState([]);
  const [statFilters, setStatFilters] = useState([]);

  return (
    <StrategyBuilderFilterContext.Provider
      value={{
        competitions,
        setCompetitions,
        line,
        setLine,
        market,
        setMarket,
        runner,
        setRunner,
        minOdds,
        setMinOdds,
        maxOdds,
        setMaxOdds,
        resultFilters,
        setResultFilters,
        statFilters,
        setStatFilters,
      }}
    >
      {children}
    </StrategyBuilderFilterContext.Provider>
  );
};

StrategyBuilderFilterContextProvider.propTypes = {
  children: node.isRequired,
};

export default StrategyBuilderFilterContextProvider;
