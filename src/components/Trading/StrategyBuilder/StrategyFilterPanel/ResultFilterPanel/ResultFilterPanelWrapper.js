import styled from 'styled-components';

const ResultFilterPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: #7d7c7c;
  padding: 20px;
  border-radius: 10px 20px 10px 20px;
  font-size: 18px;
  margin-top: 10px;
  color: black;

  p {
    color: black;
    font-weight: 500;
    margin-bottom: 5px;
  }

  svg {
    cursor: pointer;
  }

  span {
    margin-left: 10px;
  }
`;

export default ResultFilterPanelWrapper;
