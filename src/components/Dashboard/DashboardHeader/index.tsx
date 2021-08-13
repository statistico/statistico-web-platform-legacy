import React from 'react';

import DashboardHeaderWrapper from './DashboardHeader.styles';

const DashboardHeader = ({ title }: { title: string }) => {
  return <DashboardHeaderWrapper>{title}</DashboardHeaderWrapper>;
};

export default DashboardHeader;
