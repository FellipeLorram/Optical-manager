import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { BodyContainer } from '../styled';
import {
  PaymentMethod, PaymentMethodContainer, SellInfoContainer, TitleContainer,
} from './styled';

import Money from '../../Svgs/PaymentMethodsSelect/Money';
import Pix from '../../Svgs/PaymentMethodsSelect/Pix';
import CreditCard from '../../Svgs/PaymentMethodsSelect/CreditCard';
import Transfer from '../../Svgs/PaymentMethodsSelect/Transfer';
import Input from './Input';
import ButtonsControl from './ButtonsControl';

import axios from '../../../services/axios';

export default function Body({
  total, remains, setOnScreen, clientId, sellId, setPayments,
}) {
  const seller = useSelector((state) => state.auth.currentUserName);
  const [paymentMethod, setPaymentMethod] = useState('DINHEIRO');
  const [paymentValue, setPaymentValue] = useState('');
  const [isValidPaymentValue, setIsValidPaymentValue] = useState(true);

  const paymentMethods = [
    { text: 'DINHEIRO', icon: Money() },
    { text: 'CARTÃO', icon: CreditCard() },
    { text: 'TRANSFERÊNCIA', icon: Transfer() },
    { text: 'PIX', icon: Pix() },
  ];

  const handlePaymentMethodClick = (text) => {
    setPaymentMethod(text);
  };

  const handleAddPaymentClick = () => {
    if (!paymentValue) {
      setIsValidPaymentValue(false);
      return;
    }
    if (paymentValue > remains) {
      setIsValidPaymentValue(false);
      return;
    }
    async function request() {
      try {
        await axios.post(`clients/payments/add-payment/${clientId}/${sellId}`, {
          type: paymentMethod,
          value: paymentValue,
          receiveBy: seller,
        });
        setPayments((currentArr) => {
          const newArr = currentArr;
          newArr.push({
            type: paymentMethod,
            value: paymentValue,
            receiveBy: seller,
            PaidIn: Date.now(),
          });
          return newArr;
        });
        setOnScreen(false);
      } catch (error) {
        setIsValidPaymentValue(false);
      }
    }
    request();
  };

  return (
    <BodyContainer gap="2rem">
      <div className="column">
        <SellInfoContainer>
          <span>{`Total: ${total}`}</span>
          <span>{`Resta: ${remains}`}</span>
        </SellInfoContainer>

        <Input label="VALOR PAGO" text={paymentValue} valid={isValidPaymentValue} setText={setPaymentValue} setValidText={setIsValidPaymentValue} type="number" />

        <TitleContainer>
          <span>FORMA DE PAGAMENTO</span>
        </TitleContainer>

        <PaymentMethodContainer>
          {paymentMethods.map((method) => (
            <PaymentMethod
              onClick={() => handlePaymentMethodClick(method.text)}
              selected={paymentMethod === method.text}
              key={method.text}
            >
              <span>{method.icon}</span>
              <span>{method.text}</span>
            </PaymentMethod>
          ))}
        </PaymentMethodContainer>
        <ButtonsControl saveClick={handleAddPaymentClick} />
      </div>
    </BodyContainer>
  );
}

Body.defaultProps = {
  clientId: '',
  sellId: '',
  total: 0,
  remains: 0,
  setOnScreen: () => 1,
};

Body.propTypes = {
  remains: PropTypes.number,
  total: PropTypes.number,
  setOnScreen: PropTypes.func,
  clientId: PropTypes.string,
  sellId: PropTypes.string,
  setPayments: PropTypes.func.isRequired,
};
