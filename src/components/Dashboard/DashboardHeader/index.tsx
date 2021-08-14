import React from 'react';

import { DashboardHeaderWrapper, Title } from './DashboardHeader.styles';

type DashboardHeaderProps = {
  children?: React.ReactNode;
  title: string;
};

const DashboardHeader = (props: DashboardHeaderProps) => {
  const { children, title } = props;

  return (
    <DashboardHeaderWrapper>
      <Title>{title}</Title>
      {children}
    </DashboardHeaderWrapper>
  );
};

export default DashboardHeader;
