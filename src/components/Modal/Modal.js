import React from 'react';
import { bool, func, node } from 'prop-types';

import Aux from '../../hoc/Aux/Aux';
import Backdrop from './Backdrop';
import ModalWrapper from './ModalWrapper';

const Modal = (props) => {
  const { children, clicked, show } = props;

  return (
    <Aux>
      <Backdrop show={show} onClick={clicked} />
      <ModalWrapper open={show}>{children}</ModalWrapper>
    </Aux>
  );
};

Modal.propTypes = {
  children: node.isRequired,
  clicked: func.isRequired,
  show: bool.isRequired,
};

export default Modal;
