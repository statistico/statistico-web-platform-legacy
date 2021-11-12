import React from 'react';
import { node } from 'prop-types';

import ContainerWrapper from './ContainerWrapper';

const dashboard = (props) => {
  const { children } = props;

  return <ContainerWrapper>{children}</ContainerWrapper>;
};

dashboard.propTypes = {
  children: node.isRequired,
};

export default dashboard;
