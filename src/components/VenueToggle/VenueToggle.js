import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const VenueToggle = (props) => {
  const { selected, styles, updateSelected } = props;

  const types = ['home', 'away', null];

  const toggle = (venue) => {
    updateSelected(venue);
  };

  return (
    <div className={styles}>
      {types.map((type) => {
        return (
          <Button
            key={type}
            click={() => toggle(type)}
            isActive={selected === type}
            label={type == null ? 'ALL' : type.toUpperCase()}
          />
        );
      })}
    </div>
  );
};

VenueToggle.propTypes = {
  selected: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  styles: PropTypes.string.isRequired,
  updateSelected: PropTypes.func.isRequired,
};

VenueToggle.defaultProps = {
  selected: null,
};

export default VenueToggle;
