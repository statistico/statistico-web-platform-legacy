import styled from 'styled-components';
import { Tr } from 'react-super-responsive-table';

const SeasonRowWrapper = styled(Tr)`
  font-size: 14px;
  color: #22ccde;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default SeasonRowWrapper;
