import React from 'react';
import { bool, node } from 'prop-types';

import DashboardWrapper from './DashboardWrapper';

const dashboard = (props) => {
  const { children, open } = props;

  return <DashboardWrapper open={open}>{children}</DashboardWrapper>;
};

dashboard.propTypes = {
  children: node.isRequired,
  open: bool.isRequired,
};

export default dashboard;
