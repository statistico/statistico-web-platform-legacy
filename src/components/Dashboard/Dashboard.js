import React from 'react';
import { node } from 'prop-types';

import DashboardWrapper from './DashboardWrapper';

const dashboard = (props) => {
  const { children } = props;

  return <DashboardWrapper>{children}</DashboardWrapper>;
};

dashboard.propTypes = {
  children: node.isRequired,
};

export default dashboard;
