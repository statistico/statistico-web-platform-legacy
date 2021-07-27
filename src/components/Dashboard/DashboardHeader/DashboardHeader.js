import React from 'react';
import { string } from 'prop-types';

import DashboardHeaderWrapper from './DashboardHeader.styles';

const DashboardHeader = (props) => {
  const { title } = props;

  return <DashboardHeaderWrapper>{title}</DashboardHeaderWrapper>;
};

DashboardHeader.propTypes = {
  title: string.isRequired,
};

export default DashboardHeader;
