import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  background-color: #eeeeee;
  width: 450px;
  height: fit-content;
  border-radius: 10px;
  padding: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  z-index: 1050;
  color: black;

  p {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 98%;
  }
`;

export default ModalWrapper;
