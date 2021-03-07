import styled from 'styled-components';

const FilterPanelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  color: #ccc;
  padding: 20px 0 20px 0;
  margin: 20px 0 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
  }
`;

export default FilterPanelWrapper;
