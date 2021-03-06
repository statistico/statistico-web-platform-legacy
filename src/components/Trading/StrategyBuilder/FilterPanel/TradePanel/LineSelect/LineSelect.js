import React from 'react';

import LineSelectWrapper from './LineSelectWrapper';
import SingleFilter from '../../../../../SingleFilter/SingleFilter';

import { lines } from '../../../../../../config/filters';
import selectStyles from '../../../../../../config/form-styles';

const LineSelect = () => {
  return (
    <LineSelectWrapper>
      <SingleFilter
        selection={null}
        selections={lines}
        styles={selectStyles}
        title="Line"
        toggleSelection={() => {}}
      />
    </LineSelectWrapper>
  );
};

export default LineSelect;
