import styled from 'styled-components';

const FilterPanelTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100px;
  padding: 30px;
  position: fixed;
  margin-top: 20px;
  background-color: #1b1e22;
  color: #dedcdc;
  right: 0;
  cursor: pointer;
  border-radius: 10px 0 0 10px;

  .icon {
    &:hover {
      color: #22ccde;
    }
  }
`;

export default FilterPanelTabWrapper;
