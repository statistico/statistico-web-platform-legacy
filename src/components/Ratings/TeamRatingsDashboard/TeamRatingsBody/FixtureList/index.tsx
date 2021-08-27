import React from 'react';

import FixtureListWrapper from './FixtureList.styles';

type FixtureListProps = {
  width: string;
};

const FixtureList = (props: FixtureListProps): JSX.Element => {
  const { width } = props;

  return (
    <FixtureListWrapper width={width}>
      The fixture list will go here
    </FixtureListWrapper>
  );
};

export default FixtureList;
