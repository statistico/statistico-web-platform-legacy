import styled from 'styled-components';

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 15px;
  margin: 5px;
  width: 100%;
  border-radius: 15px;
  background: rgba(196, 194, 194, 0.8);
  backdrop-filter: blur(3px);
  font-size: 16px;
  text-align: center;
  color: black;

  p {
    margin-left: 7px;
  }

  svg {
    margin-right: 10px;
    color: black;
    font-size: 18px;
  }
`;

export default ErrorWrapper;
