import React from 'react';
import { string } from 'prop-types';

import PanelTitleWrapper from './PanelTitleWrapper';

const PanelTitle = (props) => {
  const { title } = props;

  return <PanelTitleWrapper>{title}</PanelTitleWrapper>;
};

PanelTitle.propTypes = {
  title: string.isRequired,
};

export default PanelTitle;
