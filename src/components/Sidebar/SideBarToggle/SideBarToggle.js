import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import SideBarToggleWrapper from './SideBarToggleWrapper';

const SideBarToggle = () => {
  return (
    <SideBarToggleWrapper>
      <FontAwesomeIcon icon={faChevronCircleLeft} size="1x" />
    </SideBarToggleWrapper>
  );
};

export default SideBarToggle;
