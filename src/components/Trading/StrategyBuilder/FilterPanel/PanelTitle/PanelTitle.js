import React from 'react';
import { node, string } from 'prop-types';

import PanelTitleWrapper from './PanelTitleWrapper';

const PanelTitle = (props) => {
  const { children, title } = props;

  return (
    <PanelTitleWrapper>
      {title} {children}
    </PanelTitleWrapper>
  );
};

PanelTitle.propTypes = {
  children: node,
  title: string.isRequired,
};

PanelTitle.defaultProps = {
  children: null,
};

export default PanelTitle;
