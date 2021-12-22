import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PdfHeader = ({
  sellOs, clientName, sellDate, clientPhone,
}) => {
  const opticalName = useSelector((state) => state.auth.user.nome);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '30px',
      }}
    >
      <span
        style={{
          fontSize: '36px',
        }}
      >
        {opticalName}
      </span>
      <div
        style={{
          fontSize: '18px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <div>
          <span style={{ color: '#666666' }}>OS:</span>
          {` ${sellOs}`}
        </div>
        {sellDate && (
          <div>
            <span style={{ color: '#666666' }}>Data:</span>
            {` ${sellDate}`}
          </div>
        )}
        {clientName && (
          <div>
            <span style={{ color: '#666666' }}>Cliente:</span>
            {` ${clientName}`}
          </div>
        )}
        {clientPhone && (
          <div>
            <span style={{ color: '#666666' }}>Telefone:</span>
            {` ${clientPhone}`}
          </div>
        )}
      </div>

    </div>
  );
};

export default PdfHeader;

PdfHeader.propTypes = {
  clientPhone: PropTypes.string.isRequired,
  sellOs: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  sellDate: PropTypes.string.isRequired,
};
