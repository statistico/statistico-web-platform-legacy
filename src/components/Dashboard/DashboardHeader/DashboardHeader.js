import React from 'react';
import { node } from 'prop-types';

import DashboardHeaderWrapper from './DashboardHeader.styles';

const DashboardHeader = (props) => {
  const { children } = props;

  return <DashboardHeaderWrapper>{children}</DashboardHeaderWrapper>;
};

DashboardHeader.propTypes = {
  children: node.isRequired,
};

export default DashboardHeader;
