import React from 'react';
import { string } from 'prop-types';

import DashboardHeaderWrapper from './DashboardHeader.styles';

const DashboardHeader = (props) => {
  const { title, width } = props;

  return <DashboardHeaderWrapper width={width}>{title}</DashboardHeaderWrapper>;
};

DashboardHeader.propTypes = {
  title: string.isRequired,
  width: string,
};

DashboardHeader.defaultProps = {
  width: '100%',
};

export default DashboardHeader;
