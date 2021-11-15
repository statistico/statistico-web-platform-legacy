import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #dedcdc;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #dedcdc;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

export default MenuWrapper;
