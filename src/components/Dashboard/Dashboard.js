import React from 'react';
import PropTypes from 'prop-types';

import DashboardWrapper from './DashboardWrapper';

const dashboard = (props) => {
  const { children } = props;

  return <DashboardWrapper>{children}</DashboardWrapper>;
};

dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default dashboard;
