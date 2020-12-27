import styled from 'styled-components';

const SideBarToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0 20px 0;
  border-top: 2px solid #909090;
  color: #909090;
  cursor: pointer;

  &:hover {
    color: #22ccde;
    font-weight: 600;
  }
`;

export default SideBarToggleWrapper;
