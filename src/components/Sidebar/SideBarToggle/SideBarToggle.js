import React from 'react';
import { bool, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

import SideBarToggleWrapper from './SideBarToggleWrapper';

const SideBarToggle = (props) => {
  const { open, clicked } = props;

  return (
    <SideBarToggleWrapper>
      {open ? (
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size="1x"
          onClick={clicked}
        />
      ) : (
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          size="1x"
          onClick={clicked}
        />
      )}
    </SideBarToggleWrapper>
  );
};

SideBarToggle.propTypes = {
  open: bool.isRequired,
  clicked: func.isRequired,
};

export default SideBarToggle;
