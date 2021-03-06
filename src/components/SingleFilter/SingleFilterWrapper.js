import styled from 'styled-components';

const SingleFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  padding-bottom: 10px;
  font-size: 18px;
  margin: 0 10px 0 10px;

  p {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export default SingleFilterWrapper;
