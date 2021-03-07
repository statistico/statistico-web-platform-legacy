import styled from 'styled-components';

const PanelTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 98%;
  color: #dedcdc;
  font-size: 22px;
  border-bottom: 2px solid #43434e;
  text-align: left;
  align-items: center;
  padding: 10px;
  margin: 0 5px 15px 0;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    padding: 0 0 5px 0;
    margin-bottom: 10px;
  }
`;

export default PanelTitleWrapper;
