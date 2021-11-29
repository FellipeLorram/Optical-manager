import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

import history from '../../services/history';
import axios from '../../services/axios';
import Input from './Input';
import InputSign from './InputSign';
import { BodyContainer, SelectModal } from './styled';
import { Button } from '../../styles/GlobalStyles';
import Frames from '../../components/Modal/Frames/FramesModal';
import Lens from '../../components/Modal/Lens/LensModal';
import ContactLenses from '../../components/Modal/ContactLenses/ContactLensModal';
import Payments from './Payments';

export default function Body({ id }) {
  const [payments, setPayments] = useState([]);
  const [lastExamData, setLastExamData] = useState('');
  const [ModalFramesOnScreen, setModalFramesOnScreen] = useState(false);
  const [ModalLensOnScreen, setModalLensOnScreen] = useState(false);
  const [ModalContactLensOnScreen, setModalContactLensOnScreen] = useState(false);

  const [sellDate, setSellDate] = useState('');
  const [inputBlock, setInputBlock] = useState(false);

  const [EsfOdSign, setEsfOdSign] = useState('+');
  const [EsfOeSign, setEsfOeSign] = useState('-');

  const [esfOd, setEsfOd] = useState('');
  const [isValidesfOd, setIsValidEsfOd] = useState(true);
  const [cilOd, setCilOd] = useState('');
  const [isValidCilOd, setIsValidCilOd] = useState(true);
  const [eixoOd, setEixoOd] = useState('');
  const [isValidEixoOd, setIsValidEixoOd] = useState(true);

  const [esfOe, setEsfOe] = useState('');
  const [isValidesfOe, setIsValidEsfOe] = useState(true);
  const [cilOe, setCilOe] = useState('');
  const [isValidCilOe, setIsValidCilOe] = useState(true);
  const [eixoOe, setEixoOe] = useState('');
  const [isValidEixoOe, setIsValidEixoOe] = useState(true);

  const [adicao, setAdicao] = useState('');
  const [isValidAdicao, setIsValidAdicao] = useState(true);

  const [dnpOd, setDnpOd] = useState('');
  const [dnpOe, setDnpOe] = useState('');

  const [alturaOd, setAlturaOd] = useState('');
  const [alturaOe, setAlturaOe] = useState('');

  const [armacao, setArmacao] = useState('');
  const [valorArm, setValorArm] = useState('');
  const [isValidValueArm, setIsValidValueArm] = useState(true);

  const [lente, setLente] = useState('');
  const [valorLen, setValorLen] = useState('');
  const [isValidValueLen, setIsValidValueLen] = useState(true);

  const [lenteContato, setLenteContato] = useState('');
  const [valorLenContato, setValorLenContato] = useState('');
  const [isValidValueLenContato, setIsValidValueLenContato] = useState(true);

  const [desconto, setDesconto] = useState('');
  const [total, setTotal] = useState('');
  const [valorDaCompra, setValorDaCompra] = useState('');
  const [valorPago, setValorPago] = useState('');
  const [resta, setResta] = useState('');
  const [pago, setPago] = useState('');
  const [entregue, setEntregue] = useState('');

  useEffect(() => {
    async function getLastExamData() {
      try {
        const response = await axios.get(`/clients/${id}/lastexam`);
        setLastExamData(response.data);
      } catch (error) {
        setLastExamData('');
      }
    }
    getLastExamData();
  }, [id]);

  useEffect(() => {
    if (Number(valorLen) < 0) setValorLen(Number(valorLen) * Number(valorLen));

    const cartTotal = [valorLen, valorArm, valorLenContato]
      .reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue));
    setTotal(cartTotal);
  }, [valorArm, valorLen, valorLenContato]);

  useEffect(() => {
    if (total && desconto) {
      setValorDaCompra(Number(total) - ((Number(total) / 100) * Number(desconto)));
    } else if (total) setValorDaCompra(Number(total));
  }, [desconto, total]);

  const handleLastExamClick = () => {
    if (!lastExamData) return;

    setEsfOdSign(lastExamData.rxEsfOd[0]);
    setEsfOd(lastExamData.rxEsfOd.substring(1));
    setCilOd(lastExamData.rxCilOd.substring(1));
    setEixoOd(lastExamData.rxEixoOd);

    setEsfOeSign(lastExamData.rxEsfOe[0]);
    setEsfOe(lastExamData.rxEsfOe.substring(1));
    setCilOe(lastExamData.rxCilOe.substring(1));
    setEixoOe(lastExamData.rxEixoOe);

    setAdicao(lastExamData.rxAdd);
  };

  return (
    <BodyContainer>
      <Frames
        setValueFrame={setValorArm}
        setFrame={setArmacao}
        onScreen={ModalFramesOnScreen}
        setOnScreen={setModalFramesOnScreen}
      />
      <Lens
        setValueLen={setValorLen}
        setLen={setLente}
        onScreen={ModalLensOnScreen}
        setOnScreen={setModalLensOnScreen}
      />
      <ContactLenses
        setLenContactLenses={setLenteContato}
        onScreen={ModalContactLensOnScreen}
        setOnScreen={setModalContactLensOnScreen}
      />
      <div className="title">
        EXAME
      </div>
      <div className="sub-title">
        OLHO DIREITO
      </div>
      <div className="input--container">
        <InputSign inputBlock={inputBlock} sign={EsfOdSign} setSign={setEsfOdSign} label="ESFÉRICO" valid={isValidesfOd} setValidText={setIsValidEsfOd} setText={setEsfOd} text={esfOd} type="number" />
        <InputSign inputBlock={inputBlock} cil sign="-" label="CILINDRICO" valid={isValidCilOd} setValidText={setIsValidCilOd} setText={setCilOd} text={cilOd} type="number" />
        <Input inputBlock={inputBlock} label="EIXO" valid={isValidEixoOd} setValidText={setIsValidEixoOd} setText={setEixoOd} text={eixoOd} type="number" />
      </div>
      <div className="sub-title">
        OLHO ESQUERDO
      </div>
      <div className="input--container">
        <InputSign inputBlock={inputBlock} sign={EsfOeSign} setSign={setEsfOeSign} label="ESFÉRICO" valid={isValidesfOe} setValidText={setIsValidEsfOe} setText={setEsfOe} text={esfOe} type="number" />
        <InputSign inputBlock={inputBlock} cil sign="-" label="CILINDRICO" valid={isValidCilOe} setValidText={setIsValidCilOe} setText={setCilOe} text={cilOe} type="number" />
        <Input inputBlock={inputBlock} label="EIXO" valid={isValidEixoOe} setValidText={setIsValidEixoOe} setText={setEixoOe} text={eixoOe} type="number" />
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="ADIÇÃO" valid={isValidAdicao} setValidText={setIsValidAdicao} setText={setAdicao} text={adicao} type="number" />
      </div>
      {lastExamData && (
        <div className="container-start">
          <Button onClick={handleLastExamClick}>UTILIZAR DADOS DA ULTIMA CONSULTA</Button>
        </div>
      )}
      <div className="title">
        MEDIDAS
      </div>
      <div className="sub-title">
        OLHO DIREITO
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="DNP" valid setText={setDnpOd} text={dnpOd} type="number" />
        <Input inputBlock={inputBlock} label="ALTURA" valid setText={setAlturaOd} text={alturaOd} type="number" />
      </div>
      <div className="sub-title">
        OLHO ESQUERDO
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="DNP" valid setText={setDnpOe} text={dnpOe} type="number" />
        <Input inputBlock={inputBlock} label="ALTURA" valid setText={setAlturaOe} text={alturaOe} type="number" />
      </div>
      <div className="title">
        COMPRA
      </div>
      <div className="sub-title">
        ARMAÇÃO
      </div>
      <div className="input--container">
        <SelectModal
          onClick={() => setModalFramesOnScreen(true)}
        >
          <span>ARMAÇÃO:</span>
          <span className="frame">{armacao}</span>
        </SelectModal>
        <Input inputBlock={inputBlock} label="VALOR" valid={isValidValueArm} setValidText={setIsValidValueArm} setText={setValorArm} text={valorArm} type="number" />
      </div>
      <div className="sub-title">
        LENTE
      </div>
      <div className="input--container">
        <SelectModal
          onClick={() => setModalLensOnScreen(true)}
        >
          <span>LENTE:</span>
          <span className="frame">{lente}</span>
        </SelectModal>
        <Input inputBlock={inputBlock} label="VALOR" valid={isValidValueLen} setValidText={setIsValidValueLen} setText={setValorLen} text={valorLen} type="number" />
      </div>
      <div className="sub-title">
        LENTE DE CONTATO
      </div>
      <div className="input--container">
        <SelectModal
          onClick={() => setModalContactLensOnScreen(true)}
        >
          <span>LENTE DE CONTATO:</span>
          <span className="frame">{lenteContato}</span>
        </SelectModal>
        <Input inputBlock={inputBlock} label="VALOR" valid={isValidValueLenContato} setValidText={setIsValidValueLenContato} setText={setValorLenContato} text={valorLenContato} type="number" />
      </div>
      <div className="title">
        {'TOTAL:  '}
        <CurrencyFormat value={total} displayType="text" thousandSeparator prefix="R$" />
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="DESCONTO" valid setText={setDesconto} text={desconto} type="number" />
        <Input inputBlock={inputBlock} label="VALOR DA COMPRA" valid setText={setValorDaCompra} text={valorDaCompra} type="number" />
      </div>
      <Payments
        payments={payments}
        remains={resta}
        purchaseAmount={valorDaCompra}
        amountPaid={valorPago}
      />
      <div className="container-start">
        <Button>GERAR PDF</Button>
      </div>
      <div className="container-end">
        <Button>SALVAR</Button>
      </div>
    </BodyContainer>
  );
}

Body.propTypes = {
  id: PropTypes.string.isRequired,
};
