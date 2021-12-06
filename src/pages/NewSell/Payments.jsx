import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

import { Payment, PaymentsContainer } from './styled';
import { Button } from '../../styles/GlobalStyles';

export default function Payments({
  payments,
  remains,
  purchaseAmount,
  amountPaid,
  handleAddPaymentClick,
  setDataPayment,
  setOnScreen,
}) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const FormatDate = (date) => new Date(date).toLocaleDateString('pt-BR', options);

  const handleClick = (value, method, id) => {
    setDataPayment({
      data: true,
      paymentMethod: method,
      paymentValue: value,
      id,
    });
    setOnScreen(true);
  };

  return (
    <PaymentsContainer>
      <div className="payment-container-header">PAGAMENTOS</div>
      {payments.length > 0 ? (
        <div className="payment-container-grid">
          {payments.map((payment) => (
            <Payment
              key={payment._id}
              onClick={() => handleClick(payment.value, payment.type, payment._id)}
            >
              <div className="payment-row">
                <span className="payment-row-text">Pago no:</span>
                <span>{payment.type}</span>
              </div>
              <div className="payment-row">
                <span className="payment-row-text">Valor:</span>
                <span>
                  <CurrencyFormat value={payment.value} displayType="text" thousandSeparator prefix="R$" />
                </span>
              </div>
              <div className="payment-row">
                <span className="payment-row-text">Recebido em:</span>
                <span>{FormatDate(payment.PaidIn)}</span>
              </div>
              <div className="payment-row">
                <span className="payment-row-text">Por:</span>
                <span>{payment.receiveBy}</span>
              </div>
            </Payment>
          ))}
        </div>
      )
        : (
          <div className="no-payments">
            Ainda não foi recebido nenhum pagamento referente a essa compra
          </div>
        )}
      <div className="payment-container-footer">
        <span>
          {'Total: '}
          <CurrencyFormat value={purchaseAmount} displayType="text" thousandSeparator prefix="R$" />
        </span>
        <span>
          {'Pago: '}
          <CurrencyFormat value={amountPaid} displayType="text" thousandSeparator prefix="R$" />

        </span>
        <span>
          {'Resta: '}
          <CurrencyFormat value={remains} displayType="text" thousandSeparator prefix="R$" />
        </span>
        <Button onClick={handleAddPaymentClick}>ADICIONAR PAGAMENTO</Button>
      </div>
    </PaymentsContainer>
  );
}

Payments.defaultProps = {
  remains: 0,
  purchaseAmount: 0,
  amountPaid: 0,
};

Payments.propTypes = {
  handleAddPaymentClick: PropTypes.func.isRequired,
  payments: PropTypes.array.isRequired,
  remains: PropTypes.number,
  purchaseAmount: PropTypes.number,
  amountPaid: PropTypes.number,
  setDataPayment: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
