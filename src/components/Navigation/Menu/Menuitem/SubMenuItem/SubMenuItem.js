import React from 'react';
import { func, string } from 'prop-types';

import SubMenuItemWrapper from './SubMenuItemWrapper';

const SubMenuItem = (props) => {
  const { clicked, link, title } = props;

  return (
    <SubMenuItemWrapper onClick={() => clicked()} to={link}>
      {title}
    </SubMenuItemWrapper>
  );
};

SubMenuItem.propTypes = {
  clicked: func.isRequired,
  link: string.isRequired,
  title: string.isRequired,
};

export default SubMenuItem;
