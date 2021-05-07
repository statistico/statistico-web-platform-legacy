import styled from 'styled-components';

const MenuArrowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px 5px 5px 0;
  width: 15%;

  @media (max-width: 768px) {
    width: 40%;
    justify-content: flex-end;
    padding: 15px 45px 5px 0;
  }
`;

export default MenuArrowWrapper;
