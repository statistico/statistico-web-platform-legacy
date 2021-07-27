import styled from 'styled-components';

const FilterPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  right: 0;
  width: 320px;
  background: #1b1e22;
  height: 100vh;
  color: #dedcdc;
  font-size: 22px;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 20px;

  .icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #909090;
    cursor: pointer;
    margin: auto 0 0 0;
    width: 100%;

    &:hover {
      color: #22ccde;
      font-weight: 600;
    }
  }
`;

export default FilterPanelWrapper;
