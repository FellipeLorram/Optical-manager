import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ModalContainer from '../../../components/Modal/Index';
import Body from './Body';

function PdfModalComponent({
  onScreen,
  setOnScreen,
  PdfContent,
}) {
  return (
    <ModalContainer onScreen={onScreen} setOnScreen={setOnScreen} Lg>
      <Body PdfContent={PdfContent} />
    </ModalContainer>
  );
}

PdfModalComponent.defaultProps = {
};

PdfModalComponent.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  PdfContent: PropTypes.object.isRequired,
};

const PdfModal = memo(PdfModalComponent);

export default PdfModal;
