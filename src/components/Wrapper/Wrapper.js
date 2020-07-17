import React from 'react';
import PropTypes from 'prop-types';

const wrapper = (props) => {
  const { children, styles } = props;

  return <div className={styles}>{children}</div>;
};

wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.string.isRequired,
};

export default wrapper;
