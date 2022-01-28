import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { BodyContainer } from '../../../components/Modal/styled';
import {
  PaymentMethod, PaymentMethodContainer, SellInfoContainer, TitleContainer,
} from './styled';

import Money from '../../../components/Svgs/PaymentMethodsSelect/Money';
import Pix from '../../../components/Svgs/PaymentMethodsSelect/Pix';
import CreditCard from '../../../components/Svgs/PaymentMethodsSelect/CreditCard';
import Transfer from '../../../components/Svgs/PaymentMethodsSelect/Transfer';
import Input from '../../../components/Input/Input';
import ButtonsControl from './ButtonsControl';

import axios from '../../../services/axios';

export default function Body({
  total, remains, setOnScreen, clientId, sellId, dataPayment, setPayments,
}) {
  const seller = useSelector((state) => state.auth.currentUserName);
  const [paymentId, setPaymentId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('DINHEIRO');
  const [paymentValue, setPaymentValue] = useState('');
  const [isValidPaymentValue, setIsValidPaymentValue] = useState(true);
  const [inputBlock, setInputBlock] = useState(false);

  useEffect(() => {
    if (!dataPayment.data) return;
    setPaymentMethod(dataPayment.paymentMethod);
    setPaymentValue(dataPayment.paymentValue);
    setPaymentId(dataPayment.id);
    setInputBlock(true);
  }, [dataPayment]);

  const paymentMethods = [
    { text: 'DINHEIRO', icon: Money() },
    { text: 'CARTÃO', icon: CreditCard() },
    { text: 'TRANSFERÊNCIA', icon: Transfer() },
    { text: 'PIX', icon: Pix() },
  ];

  const handlePaymentMethodClick = (text) => {
    if (inputBlock) return;
    setPaymentMethod(text);
  };

  const handleDeleteClick = () => {
    async function request() {
      try {
        await axios.delete(`/clients/payments/${clientId}/${sellId}/${paymentId}`);
        setOnScreen(false);
        window.location.reload(false);
      } catch (error) {
        setIsValidPaymentValue(false);
      }
    }
    request();
  };

  const handleAddPaymentClick = () => {
    if (!paymentValue) {
      setIsValidPaymentValue(false);
      return;
    }
    if (!paymentId && paymentValue > remains) {
      setIsValidPaymentValue(false);
      return;
    }
    async function request() {
      try {
        if (paymentId) {
          await axios.put(`/clients/payments/${clientId}/${sellId}/${paymentId}`, {
            type: paymentMethod,
            value: paymentValue,
            receiveBy: seller,
          });
        } else {
          await axios.post(`clients/payments/add-payment/${clientId}/${sellId}`, {
            type: paymentMethod,
            value: paymentValue,
            receiveBy: seller,
          });
        }
        setOnScreen(false);
        window.location.reload(false);
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

        <Input
          label="VALOR PAGO"
          text={paymentValue}
          valid={isValidPaymentValue}
          setText={setPaymentValue}
          setValidText={setIsValidPaymentValue}
          type="number"
          inputBlock={inputBlock}
        />

        <TitleContainer>
          <span>FORMA DE PAGAMENTO</span>
        </TitleContainer>

        <PaymentMethodContainer>
          {paymentMethods.map((method) => (
            <PaymentMethod
              noHover={inputBlock}
              onClick={() => handlePaymentMethodClick(method.text)}
              selected={paymentMethod === method.text}
              key={method.text}
            >
              <span>{method.icon}</span>
              <span>{method.text}</span>
            </PaymentMethod>
          ))}
        </PaymentMethodContainer>
        <ButtonsControl
          handleDeleteClick={handleDeleteClick}
          setEdit={setInputBlock}
          edit={inputBlock}
          saveClick={handleAddPaymentClick}
        />
      </div>
    </BodyContainer>
  );
}

Body.defaultProps = {
  clientId: '',
  sellId: '',
  total: 0,
  remains: 0,
  dataPayment: {},
  setOnScreen: () => 1,
};

Body.propTypes = {
  dataPayment: PropTypes.object,
  remains: PropTypes.number,
  total: PropTypes.number,
  setPayments: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func,
  clientId: PropTypes.string,
  sellId: PropTypes.string,
};
