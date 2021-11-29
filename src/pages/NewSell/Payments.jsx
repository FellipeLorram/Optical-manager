import React from 'react';
import PropTypes from 'prop-types';

import { PaymentsContainer } from './styled';
import { Button } from '../../styles/GlobalStyles';

export default function Payments({
  payments,
  remains,
  purchaseAmount,
  amountPaid,
}) {
  return (
    <PaymentsContainer>
      <div className="payment-container-header">PAGAMENTOS</div>
      {payments.length > 0 ? (
        <div className="payment-container-grid">
          {payments.map((payment) => (
            <div className="payment">
              <div className="payment-row">
                <span>{payment.type}</span>
                <span>{payment.value}</span>
              </div>
              <div className="payment-row">
                <span>Recebido em:</span>
                <span>{payment.PaidIn}</span>
              </div>
              <div className="payment-row">
                <span>Por:</span>
                <span>{payment.PaidIn}</span>
              </div>
            </div>
          ))}
        </div>
      )
        : (
          <div className="no-payments">
            Ainda não foi recebido nenhum pagamento referente a essa compra
          </div>
        )}
      <div className="payment-container-footer">
        <span>{`Total: ${purchaseAmount || 'R$0,00'}`}</span>
        <span>{`Pago: ${amountPaid || 'R$0,00'}`}</span>
        <span>{`Resta: ${remains || 'R$0,00'}`}</span>
        <Button>ADICIONAR PAGAMENTO</Button>
      </div>
    </PaymentsContainer>
  );
}

Payments.defaultProps = {
  remains: 'R$0.00',
  purchaseAmount: 'R$0.00',
  amountPaid: 'R$0.00',
};

Payments.propTypes = {
  payments: PropTypes.array.isRequired,
  remains: PropTypes.string,
  purchaseAmount: PropTypes.string,
  amountPaid: PropTypes.string,
};
