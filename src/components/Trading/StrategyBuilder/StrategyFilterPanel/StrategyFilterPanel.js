import React from 'react';
import { bool } from 'prop-types';

import StrategyFilterPanelWrapper from './StrategyFilterPanelWrapper';

const StrategyFilterPanel = (props) => {
  const { active } = props;

  return (
    <StrategyFilterPanelWrapper active={active}>
      <div>I am open</div>
    </StrategyFilterPanelWrapper>
  );
};

StrategyFilterPanel.propTypes = {
  active: bool.isRequired,
};

export default StrategyFilterPanel;
