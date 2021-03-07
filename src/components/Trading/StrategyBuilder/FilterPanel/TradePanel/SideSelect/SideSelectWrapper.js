import styled from 'styled-components';

const SideSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 5px;
  }
`;

export default SideSelectWrapper;
