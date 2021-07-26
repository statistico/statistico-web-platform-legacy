import React from 'react';
import { func, number } from 'prop-types';

import CompetitionListWrapper from './CompetitionList.styles';
import CompetitionListItem from './CompetitionListItem/CompetitionListItem';
import competitions from '../../../../config/competitions';

const CompetitionList = (props) => {
  const { selectedId, toggle } = props;

  return (
    <CompetitionListWrapper selected={selectedId}>
      {competitions.map((c) => {
        return (
          <CompetitionListItem
            id={c.id}
            name={c.name}
            key={c.id}
            selectedId={selectedId}
            toggle={toggle}
          />
        );
      })}
    </CompetitionListWrapper>
  );
};

CompetitionList.propTypes = {
  selectedId: number,
  toggle: func.isRequired,
};

CompetitionList.defaultProps = {
  selectedId: null,
};

export default CompetitionList;
