import styled from 'styled-components';

const MissingFilterErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
  width: 100%;
  padding: 10px;

  h3 {
    margin-bottom: 10px;
  }

  h3,
  p {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    ul {
      margin-left: 20px;
    }
  }
`;

export default MissingFilterErrorWrapper;
