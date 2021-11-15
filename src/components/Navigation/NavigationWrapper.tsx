import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  height: 70px;
  background-color: #1b1e22;
  color: #6f7580;
  bottom: 0;
  left: 0;
  z-index: 999;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 110px;
    height: 93vh;
    color: #6f7580;
    margin: 30px;
    border-radius: 20px;
    top: 0;
  }
`;

export default NavigationWrapper;
