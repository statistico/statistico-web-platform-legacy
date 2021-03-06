import styled from 'styled-components';

const TypeSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export default TypeSelectWrapper;
