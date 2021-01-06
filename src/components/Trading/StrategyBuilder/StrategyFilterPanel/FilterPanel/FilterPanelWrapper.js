import styled from 'styled-components';

const FilterPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content%;
  height: fit-content;
  padding-bottom: 10px;
  font-size: 16px;
  cursor: pointer;

  :hover {
    color: #22ccde;
  }

  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

export default FilterPanelWrapper;
