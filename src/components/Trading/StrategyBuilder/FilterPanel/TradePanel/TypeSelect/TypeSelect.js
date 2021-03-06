import React from 'react';

import TypeSelectWrapper from './TypeSelectWrapper';
import { type } from '../../../../../../config/filters';
import selectStyles from '../../../../../../config/form-styles';
import SingleFilter from '../../../../../SingleFilter/SingleFilter';

const TypeSelect = () => {
  return (
    <TypeSelectWrapper>
      <SingleFilter
        selection={null}
        selections={type}
        styles={selectStyles}
        title="Type"
        toggleSelection={() => {}}
      />
    </TypeSelectWrapper>
  );
};

export default TypeSelect;
