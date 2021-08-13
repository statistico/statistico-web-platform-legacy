import styled from 'styled-components';

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  transition: width 0.25s ease, background 0.25s ease;
  width: calc(100% - ${(props) => (props.open ? '240px' : '80px')});
  margin-left: ${(props) => (props.open ? '240px' : '80px')};
  min-height: 100vh;
  height: fit-content;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 15px;
    width: 100vw;
  }
`;

export default DashboardWrapper;
