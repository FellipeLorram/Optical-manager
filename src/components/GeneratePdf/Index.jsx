/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import ClientPaper from './Templates/ClientPaper';
import LabsPaper from './Templates/LabsPdf';

export const GeneratePdf = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        background: '#fff',
        width: '100%',
        height: '100%',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {props.clientSwitch && (
        <ClientPaper PdfContent={props.PdfContent} />
      )}
      {props.labSwitch && (
        <LabsPaper PdfContent={props.PdfContent} />
      )}
    </div>
  );
});

export default GeneratePdf;

GeneratePdf.propTypes = {
  PdfContent: PropTypes.object.isRequired,
  labSwitch: PropTypes.bool.isRequired,
  clientSwitch: PropTypes.bool.isRequired,
};
