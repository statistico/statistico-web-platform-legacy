import styled from 'styled-components';

const CompetitionRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  color: ${(props) => props.colour};

  p {
    width: 20%;
    text-align: center;

    :first-child {
      text-align: left;
    }
  }
`;

export default CompetitionRowWrapper;
