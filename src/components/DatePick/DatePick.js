import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import 'react-datepicker/dist/react-datepicker.css';

const DatePick = (props) => {
  const { date, placeholder, styles, toggleDate } = props;

  return (
    <div className={styles}>
      <DatePicker
        selected={date}
        onChange={(x) => toggleDate(x)}
        showMonthDropdown
        showYearDropdown
        placeholderText={placeholder}
        dateFormat="d MMMM yyyy"
        withPortal
      />
      <span
        onClick={() => toggleDate(null)}
        onKeyDown={() => toggleDate(null)}
        role="button"
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faSyncAlt} />
      </span>
    </div>
  );
};

DatePick.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  placeholder: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  toggleDate: PropTypes.func.isRequired,
};

DatePick.defaultProps = {
  date: null,
};

export default DatePick;
