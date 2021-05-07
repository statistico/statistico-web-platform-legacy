import React from 'react';
import { string } from 'prop-types';

import SubMenuItemWrapper from './SubMenuItemWrapper';

const SubMenuItem = (props) => {
  const { link, title } = props;

  return <SubMenuItemWrapper to={link}>{title}</SubMenuItemWrapper>;
};

SubMenuItem.propTypes = {
  link: string.isRequired,
  title: string.isRequired,
};

export default SubMenuItem;
