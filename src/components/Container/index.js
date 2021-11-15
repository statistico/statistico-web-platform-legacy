import React from 'react';
import { node } from 'prop-types';

import ContainerWrapper from './ContainerWrapper';

const Container = (props) => {
  const { children } = props;

  return <ContainerWrapper>{children}</ContainerWrapper>;
};

Container.propTypes = {
  children: node.isRequired,
};

export default Container;
