import styled from 'styled-components';

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #23262b;
  color: #6f7580;
  flex-grow: 1;
  padding: 50px;
  transition: width 0.25s ease, background 0.25s ease;
  width: calc(100% - ${(props) => (props.open ? '240px' : '80px')});
  margin-left: ${(props) => (props.open ? '240px' : '80px')};
`;

export default DashboardWrapper;
