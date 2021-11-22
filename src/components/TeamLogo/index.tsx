import React from 'react';

import TeamLogoWrapper from './TeamLogo.styles';

type TeamLogoProps = {
  name: string;
  onClick: () => void;
  url: string | null;
};

const TeamLogo = (props: TeamLogoProps): JSX.Element => {
  const { name, onClick, url } = props;

  return (
    <TeamLogoWrapper onClick={onClick}>
      <img src={url ?? ''} alt={name} />
    </TeamLogoWrapper>
  );
};

export default TeamLogo;
