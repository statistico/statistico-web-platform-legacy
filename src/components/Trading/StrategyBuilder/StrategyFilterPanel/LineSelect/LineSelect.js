import React, { useCallback, useState } from 'react';

import LineSelectWrapper from './LineSelectWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import { line } from '../../../../../config/filters';
import selectStyles from '../../../../../config/form-styles';

const LineSelect = () => {
  const [selectedLine, setLine] = useState(null);

  const updateLine = useCallback((l) => {
    setLine(l);
  }, []);

  return (
    <LineSelectWrapper>
      <SingleFilter
        selection={selectedLine}
        selections={line}
        styles={selectStyles}
        title="Line"
        toggleSelection={updateLine}
      />
    </LineSelectWrapper>
  );
};

export default LineSelect;
