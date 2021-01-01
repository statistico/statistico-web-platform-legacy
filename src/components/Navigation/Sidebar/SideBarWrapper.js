import styled from 'styled-components';

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${(props) => (props.open ? '240px' : '80px')};
  position: fixed;
  top: 0;
  min-height: 100vh;
  background-color: #1b1e22;
  color: #6f7580;
  font-weight: 500;
  padding: 0;
  z-index: 9999;
  transition: width 0.25s ease, background 0.25s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default SideBarWrapper;
