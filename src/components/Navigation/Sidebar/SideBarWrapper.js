import styled from 'styled-components';

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  width: ${(props) => (props.open ? '255px' : '80px')};

  @media (max-width: 768px) {
    display: none;
  }
`;

export default SideBarWrapper;
