import React, { useState } from 'react';
import { func, shape, string } from 'prop-types';
import { Td, Tr } from 'react-super-responsive-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Aux from '../../../../../../../hoc/Aux/Aux';
import Modal from '../../../../../../Modal/Modal';
import ResultRule from '../../ResultRule/ResultRule';

const ResultRuleRow = (props) => {
  const { filter, removeFilter, updateFilter } = props;
  const [editing, setEditing] = useState(false);

  return (
    <Aux>
      <Modal clicked={() => updateFilter(filter)} show={editing}>
        <ResultRule buttonText="Update" method={updateFilter} filter={filter} />
      </Modal>
      <Tr>
        <Td>
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="1x"
            onClick={() => removeFilter()}
          />
        </Td>
        <Td>{filter.team.label}</Td>
        <Td>{filter.result.label}</Td>
        <Td>{filter.games.label}</Td>
        <Td>{filter.venue.label}</Td>
        <Td>
          <FontAwesomeIcon
            icon={faEdit}
            size="1x"
            onClick={() => setEditing(true)}
          />
        </Td>
      </Tr>
    </Aux>
  );
};

ResultRuleRow.propTypes = {
  filter: shape({
    team: shape({
      label: string.isRequired,
    }),
    result: shape({
      label: string.isRequired,
    }),
    games: shape({
      label: string.isRequired,
    }),
    venue: shape({
      label: string.isRequired,
    }),
  }).isRequired,
  removeFilter: func.isRequired,
  updateFilter: func.isRequired,
};

export default ResultRuleRow;
