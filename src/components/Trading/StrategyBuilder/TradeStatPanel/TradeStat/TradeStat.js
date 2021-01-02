import React from 'react';
import { instanceOf, number, oneOfType, string } from 'prop-types';
import styled from 'styled-components';

import TradeStatWrapper from './TradeStatWrapper';

const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Count = styled.div`
  font-size: 50px;
  font-weight: 500;
  color: ${(props) => props.colour};
  padding-top: 20px;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 18px;
  padding-left: 5px;
  height: 100%;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 20px 0 10px 0;
`;

const TradeStat = (props) => {
  const { colour, count, metric, title } = props;

  return (
    <TradeStatWrapper>
      <CountWrapper>
        <Count colour={colour}>{count}</Count>
        <Metric>{metric}</Metric>
      </CountWrapper>
      <Title>{title}</Title>
    </TradeStatWrapper>
  );
};

TradeStat.propTypes = {
  colour: string.isRequired,
  count: number.isRequired,
  metric: oneOfType([string.isRequired, instanceOf(null)]).isRequired,
  title: string.isRequired,
};

export default TradeStat;
