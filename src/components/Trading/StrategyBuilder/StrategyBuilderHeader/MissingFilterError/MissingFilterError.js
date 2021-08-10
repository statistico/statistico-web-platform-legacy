import React from 'react';

import MissingFilterErrorWrapper from './MissingFilterErrorWrapper';

const MissingFilterError = () => (
  <MissingFilterErrorWrapper>
    <h3>Strategy Build Error</h3>
    <p>The following filters are required to build a strategy:</p>
    <ul>
      <li>Market</li>
      <li>Selection</li>
      <li>Line</li>
      <li>Side</li>
      <li>Min OR Max Odds</li>
      <li>At least one competition</li>
    </ul>
    <p>Please update your filters and try again</p>
  </MissingFilterErrorWrapper>
);

export default MissingFilterError;
