import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import SeasonSelect from '../../SeasonSelect/SeasonSelect';
import SidebarMax from '../../Sidebar/SidebarMax/SidebarMax';
import SidebarMin from '../../Sidebar/SidebarMin/SidebarMin';
import SidebarTab from '../../Sidebar/SidebarTab/SidebarTab';
import TeamDetails from '../../TeamDetails/TeamDetails';
import useTogglesMenu from '../../../hooks/useTogglesMenu';

const TeamStatsSideBar = (props) => {
  const {
    selected,
    team,
    toggleDisplay,
    seasons,
    selectedSeason,
    toggleSeason,
  } = props;

  const { menuOpen, menuToggleHandler } = useTogglesMenu(true);

  const options = [
    {
      id: 0,
      name: 'MATCHES',
    },
    {
      id: 1,
      name: 'PLAYERS',
    },
    {
      id: 2,
      name: 'STATS',
    },
    {
      id: 3,
      name: 'TIMELINES',
    },
  ];

  return (
    <Aux>
      {menuOpen ? (
        <SidebarMax clicked={menuToggleHandler} open={menuOpen}>
          <TeamDetails team={team} />
          <SeasonSelect
            seasons={seasons}
            selectedSeason={selectedSeason}
            toggleSeason={toggleSeason}
          />
          {options.map((option) => {
            return (
              <SidebarTab
                onClick={() => toggleDisplay(option.id)}
                active={selected === option.id}
                key={option.id}
                id={`Sidebar${option.id}`}
              >
                {option.name}
              </SidebarTab>
            );
          })}
        </SidebarMax>
      ) : (
        <SidebarMin clicked={menuToggleHandler} open={menuOpen} />
      )}
    </Aux>
  );
};

TeamStatsSideBar.propTypes = {
  selected: PropTypes.number.isRequired,
  team: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  toggleDisplay: PropTypes.func.isRequired,
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      current: PropTypes.bool,
      seasonIds: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  selectedSeason: PropTypes.shape({
    name: PropTypes.string,
    current: PropTypes.bool,
    seasonIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  toggleSeason: PropTypes.func.isRequired,
};

export default TeamStatsSideBar;
