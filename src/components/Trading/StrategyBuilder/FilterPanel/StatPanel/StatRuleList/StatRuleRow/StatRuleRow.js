import React, { useState } from 'react';
import { func, shape, string } from 'prop-types';
import { Td, Tr } from 'react-super-responsive-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Aux from '../../../../../../../hoc/Aux/Aux';
import Modal from '../../../../../../Modal/Modal';
import StatRule from '../../StatRule/StatRule';

const StatRuleRow = (props) => {
  const { filter, removeFilter, updateFilter } = props;
  const [editing, setEditing] = useState(false);

  return (
    <Aux>
      <Modal clicked={() => updateFilter(filter)} show={editing}>
        <StatRule button="Update" method={updateFilter} filter={filter} />
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
        <Td>{filter.stat.label}</Td>
        <Td>{filter.action.label}</Td>
        <Td>{filter.measure.label}</Td>
        <Td>{filter.metric.label}</Td>
        <Td>{filter.value.label}</Td>
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

StatRuleRow.propTypes = {
  filter: shape({
    stat: shape({
      label: string.isRequired,
    }),
    action: shape({
      label: string.isRequired,
    }),
    team: shape({
      label: string.isRequired,
    }),
    measure: shape({
      label: string.isRequired,
    }),
    metric: shape({
      label: string.isRequired,
    }),
    value: shape({
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

export default StatRuleRow;
