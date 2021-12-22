import React from 'react';
import PropTypes from 'prop-types';

import Header from './PdfHeader';

const ClientPaper = ({ PdfContent }) => (
  <div
    style={{
      width: '100%',
      borderBottom: '2px dotted #000',
    }}
  >
    <Header
      sellOs={PdfContent.sellOs}
      clientName=""
      clientPhone=""
      sellDate={PdfContent.sellDate}
    />
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      gap: '20px',
    }}
    >
      <div style={{
        width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', fontSize: '18px',
      }}
      >
        <span
          style={{
            background: '#cceeff', width: '100%', padding: '10px', textAlign: 'center', border: '1px solid #0088cc', borderBottom: 'none',
          }}
        >
          DESCRIÇÃO
        </span>
        <div
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
          }}
        >
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
            }}
          >
            {PdfContent.armacao}
          </span>
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
              background: '#ddd',
              textAlign: 'center',
            }}
          >
            {`R$${PdfContent.valorArm}`}
          </span>
        </div>
        <div
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
          }}
        >
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
            }}
          >
            {PdfContent.lente}
          </span>
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
              background: '#ddd',
              textAlign: 'center',
            }}
          >
            {`R$${PdfContent.valorLen}`}
          </span>
        </div>
        <div
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
          }}
        >
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
            }}
          >
            Total
          </span>
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
              background: '#ddd',
              textAlign: 'center',
            }}
          >
            {`R$${PdfContent.total}`}
          </span>
        </div>
      </div>

      <div style={{
        width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', fontSize: '18px',
      }}
      >
        <span
          style={{
            background: '#cceeff', width: '100%', padding: '10px', textAlign: 'center', border: '1px solid #0088cc', borderBottom: 'none',
          }}
        >
          PAGAMENTO
        </span>
        <div
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
          }}
        >
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
            }}
          >
            TOTAL
          </span>
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
              background: '#ddd',
              textAlign: 'center',
            }}
          >
            {`R$${PdfContent.total}`}
          </span>
        </div>
        <div
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
          }}
        >
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
            }}
          >
            PAGO
          </span>
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
              background: '#ddd',
              textAlign: 'center',
            }}
          >
            {`R$${PdfContent.pago}`}
          </span>
        </div>
        <div
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
          }}
        >
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
            }}
          >
            RESTA
          </span>
          <span
            style={{
              width: '100%',
              borderBottom: '1px solid #bbb',
              padding: '10px',
              background: '#ddd',
              textAlign: 'center',
            }}
          >
            {`R$${PdfContent.resta}`}
          </span>
        </div>
      </div>
    </div>
    <div style={{ width: '100%', padding: '10px', textAlign: 'left' }}>
      <p>Prazo de entrega: 5 dias úteis*</p>
    </div>
  </div>
);

export default ClientPaper;

ClientPaper.propTypes = {
  PdfContent: PropTypes.object.isRequired,
};
