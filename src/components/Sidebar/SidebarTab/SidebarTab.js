import styled from 'styled-components';

const SidebarTab = styled.div`
  width: 100%;
  color: #181831;
  background-color: ${(props) => (props.active ? '#22ccde' : 'white')};
  text-align: center;
  padding: 20px 0;
  cursor: pointer;
  font-weight: bold;
  
  :hover {
    background-color: #22ccde;
    color: white;
`;

export default SidebarTab;
