import styled from 'styled-components';

const ResponsiveMenuWrapper = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 90%;
  background-color: #1b1e22;
  position: absolute;
  margin-top: 70px;
  z-index: 1500;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default ResponsiveMenuWrapper;
