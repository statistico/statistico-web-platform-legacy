import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import classes from './SidebarMax.module.css';

const sidebarMax = (props) => {
  const { clicked, children } = props;

  return (
    <div className={classes.SidebarMax}>
      <div className={classes.Icon}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="2x"
          onClick={clicked}
          id="sidebar-arrow"
        />
      </div>
      {children}
    </div>
  );
};

sidebarMax.propTypes = {
  clicked: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default sidebarMax;
