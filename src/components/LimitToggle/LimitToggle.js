import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const LimitToggle = (props) => {
  const { toggleLimit } = props;
  const [isClearable, setIsClearable] = useState(true);

  const options = [...Array(50).keys()].map((x) => {
    return {
      value: x,
      label: x,
    };
  });

  const toggleClearable = () => {
    toggleLimit(null);
    setIsClearable(false);
  };

  return (
    <div>
      <Select
        options={options}
        defaultValue={options[0]}
        placeholder="Limit games..."
        onChange={(value) => toggleLimit(value.value)}
        isClearable={isClearable}
      />
      <p>
        <span
          onClick={toggleClearable}
          onKeyDown={toggleClearable}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon icon={faSyncAlt} />
        </span>
      </p>
    </div>
  );
};

LimitToggle.propTypes = {
  // limit: PropTypes.number.isRequired,
  toggleLimit: PropTypes.func.isRequired,
};

export default LimitToggle;
