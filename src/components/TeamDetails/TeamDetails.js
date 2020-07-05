import React from 'react';
import PropTypes from 'prop-types';

import classes from './TeamDetails.module.css';

const teamDetails = (props) => {
  const { team } = props;

  return (
    <div className={classes.TeamDetails}>
      <img src={team.logo} alt="team-logo" />
      <span className={classes.Bold}>{team.name}</span>
    </div>
  );
};

teamDetails.propTypes = {
  team: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default teamDetails;
