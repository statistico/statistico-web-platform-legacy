import React from 'react';

import TeamLogoWrapper from './TeamLogo.styles';

type TeamLogoProps = {
  name: string;
  url: string;
};

const TeamLogo = (props: TeamLogoProps): JSX.Element => {
  const { name, url } = props;

  return (
    <TeamLogoWrapper>
      <img src={url} alt={name} />
    </TeamLogoWrapper>
  );
};

export default TeamLogo;
