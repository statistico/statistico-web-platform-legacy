import React from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux/Aux";
import SidebarMax from "../../Sidebar/SidebarMax/SidebarMax";
import SidebarMin from "../../Sidebar/SidebarMin/SidebarMin";
import TeamDetails from "../../TeamDetails/TeamDetails";
import useTogglesMenu from "../../../hooks/useTogglesMenu";

const TeamStatsSideBar = (props) => {
  const { team } = props;
  const { menuOpen, menuToggleHandler } = useTogglesMenu(true);

  return (
    <Aux>
      {menuOpen ? (
        <SidebarMax clicked={menuToggleHandler} open={menuOpen}>
          <TeamDetails team={team} />
        </SidebarMax>
      ) : (
        <SidebarMin clicked={menuToggleHandler} open={menuOpen} />
      )}
    </Aux>
  );
};

TeamStatsSideBar.propTypes = {
  team: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default TeamStatsSideBar;
