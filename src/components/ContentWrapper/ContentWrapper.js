import PropTypes from 'prop-types';

const contentWrapper = (props) => {
  const { active, children } = props;

  return active ? children : null;
};

contentWrapper.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default contentWrapper;
