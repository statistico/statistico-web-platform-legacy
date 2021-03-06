import styled from 'styled-components';

const OddsSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export default OddsSelectWrapper;
