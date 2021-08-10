import React from 'react';
import {
  number, oneOf, oneOfType, string,
} from 'prop-types';
import CountUp from 'react-countup';

import styled from 'styled-components';
import TradeStatWrapper from './TradeStatWrapper';

const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Count = styled.div`
  font-size: 60px;
  font-weight: 500;
  color: ${(props) => props.colour};
  padding-top: 20px;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: 600;
  padding-left: 5px;
  height: 100%;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 30px 0 10px 0;
`;

const TradeStat = (props) => {
  const {
    colour, count, decimals, metric, title,
  } = props;

  return (
    <TradeStatWrapper>
      <CountWrapper>
        <Count colour={colour}>
          <CountUp start={0} end={count} duration={3} decimals={decimals} />
        </Count>
        <Metric>{metric}</Metric>
      </CountWrapper>
      <Title>{title}</Title>
    </TradeStatWrapper>
  );
};

TradeStat.propTypes = {
  colour: string.isRequired,
  count: number.isRequired,
  decimals: number.isRequired,
  metric: oneOfType([string.isRequired, oneOf([null]).isRequired]),
  title: string.isRequired,
};

TradeStat.defaultProps = {
  metric: null,
};

export default TradeStat;
