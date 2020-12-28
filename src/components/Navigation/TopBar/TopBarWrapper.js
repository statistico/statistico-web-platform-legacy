import styled from 'styled-components';

const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #1d1d1d;
  height: 70px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default TopBarWrapper;
