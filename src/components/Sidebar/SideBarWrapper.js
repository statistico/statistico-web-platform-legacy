import styled from 'styled-components';

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1d1d1d;
  width: ${(props) => (props.open ? '255px' : '80px')};
  border-right: 2px solid #909090;
`;

export default SideBarWrapper;
