import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { bool, func, node } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Aux from '../../hoc/Aux/Aux';
import Backdrop from './Backdrop';
import ModalWrapper from './ModalWrapper';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  svg {
    cursor: pointer;
  }
`;

const Modal = (props) => {
  const { children, clicked, show } = props;

  if (!show) {
    return null;
  }

  return createPortal(
    <Aux>
      <Backdrop onClick={clicked} />
      <ModalWrapper>
        <Header>
          <FontAwesomeIcon icon={faTimesCircle} size="1x" onClick={clicked} />
        </Header>
        <p>{children}</p>
      </ModalWrapper>
    </Aux>,
    document.querySelector('#modal-root')
  );
};

Modal.propTypes = {
  children: node.isRequired,
  clicked: func.isRequired,
  show: bool.isRequired,
};

export default Modal;
