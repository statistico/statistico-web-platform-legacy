import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  background-color: white;
  width: 450px;
  height: fit-content;
  border-radius: 10px 20px 10px 20px;
  padding: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  z-index: 1050;
`;

export default ModalWrapper;
