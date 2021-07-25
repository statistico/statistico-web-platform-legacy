import styled from 'styled-components';

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d1d6dd;
  color: #1b1e22;
  flex-grow: 1;
  padding: 30px 40px 30px 40px;
  transition: width 0.25s ease, background 0.25s ease;
  width: calc(100% - ${(props) => (props.open ? '240px' : '80px')});
  margin-left: ${(props) => (props.open ? '240px' : '80px')};

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 15px;
    width: 100vw;
  }
`;

export default DashboardWrapper;
