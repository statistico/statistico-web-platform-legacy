import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0 0 5px;
  width: 100%;
  height: 80%;
  color: #dedcdc;
  font-weight: 500;

  @media (max-width: 768px) {
    padding-left: 60px;
  }
`;

export default MenuWrapper;
