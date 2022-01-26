import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Header from './PdfHeader';

const LabsPaper = ({ PdfContent }) => {
  const sellerNames = useSelector((state) => state.auth.currentUserName);

  return (
    <div
      style={{
        width: '100%',
        borderBottom: '2px dotted #000',
      }}
    >
      <Header
        sellOs={PdfContent.sellOs}
        clientName={PdfContent.clientName}
        sellDate={PdfContent.sellDate}
        clientPhone={PdfContent.clientPhone}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: '5px',
        }}
      >

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>*</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>ESF</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>CIL</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>EIXO</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>DNP</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>AlT</span>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>OD</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>{PdfContent.esfOd}</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>{PdfContent.cilOd}</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>{PdfContent.eixoOd}</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>{PdfContent.dnpOd}</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>{PdfContent.alturaOd}</span>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>OE</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>{PdfContent.esfOe}</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>{PdfContent.cilOe}</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>{PdfContent.eixoOe}</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>{PdfContent.dnpOe}</span>
            <span style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>{PdfContent.alturaOe}</span>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <span style={{ width: '25%', padding: '10px', border: '1px solid #ccc' }}>ADD</span>
            <span style={{ width: '75%', padding: '10px', border: '1px solid #ccc' }}>PdfContent.adicao</span>
          </div>
        </div>
        <div style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', fontSize: '18px',
        }}
        >
          <div
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
            }}
          >
            <span
              style={{
                width: '30%',
                borderBottom: '1px solid #bbb',
                padding: '10px',
              }}
            >
              Armação:
            </span>
            <span
              style={{
                width: '100%',
                borderBottom: '1px solid #bbb',
                padding: '10px 3px',
                background: '#ddd',
                textAlign: 'left',
              }}
            >
              {PdfContent.armacao}
            </span>
          </div>
          <div
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
            }}
          >
            <span
              style={{
                width: '30%',
                borderBottom: '1px solid #bbb',
                padding: '10px',
              }}
            >
              Lente:
            </span>
            <span
              style={{
                width: '100%',
                borderBottom: '1px solid #bbb',
                padding: '10px 3px',
                background: '#ddd',
                textAlign: 'left',
              }}
            >
              {PdfContent.lente}
            </span>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', padding: '10px', textAlign: 'left' }}>
        <p>{`Vendido por: ${sellerNames}`}</p>
      </div>

    </div>
  );
};

export default LabsPaper;

LabsPaper.propTypes = {
  PdfContent: PropTypes.object.isRequired,
};
