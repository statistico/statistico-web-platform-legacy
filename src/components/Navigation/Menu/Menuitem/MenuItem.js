import React, { useState } from 'react';
import { array, arrayOf, bool, func, shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Aux from '../../../../hoc/Aux/Aux';
import { Icon, MenuItemWrapper, Title } from './MenuItemWrapper';
import MenuArrow from './MenuArrow/MenuArrow';
import SubMenuItem from './SubMenuItem/SubMenuItem';

const MenuItem = (props) => {
  const { clicked, open, icon, items, link, title } = props;
  const [collapsed, setCollapsed] = useState(false);

  const clickItem = () => {
    if (!open) {
      clicked();
    }

    setCollapsed(open ? !collapsed : true);
  };

  return (
    <Aux>
      <MenuItemWrapper open={open} to={link} onClick={() => clickItem()}>
        <Icon>
          <FontAwesomeIcon icon={icon} size="1x" />
        </Icon>
        <Title open={open}>{title}</Title>
        {open ? <MenuArrow collapsed={collapsed} /> : null}
      </MenuItemWrapper>
      {collapsed && open
        ? items.map((i) => (
            <SubMenuItem
              clicked={clicked}
              link={i.link}
              title={i.title}
              key={i.title}
            />
          ))
        : null}
    </Aux>
  );
};

MenuItem.propTypes = {
  clicked: func.isRequired,
  open: bool.isRequired,
  icon: shape({
    icon: array,
  }).isRequired,
  items: arrayOf(
    shape({
      title: string,
      link: string,
    })
  ).isRequired,
  link: string.isRequired,
  title: string.isRequired,
};

export default MenuItem;
