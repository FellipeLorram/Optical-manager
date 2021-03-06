import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

import history from '../../services/history';
import axios from '../../services/axios';
import Input from '../../components/Input/Input';
import InputSign from '../../components/Input/InputSign';
import { SelectModal } from './styled';
import Button from '../../components/Buttons/Index';
import { FormBodyContainer } from '../../styles/GlobalStyles';
import Frames from '../../Widgets/Modals/Frames/Index';
import Lens from '../../Widgets/Modals/Lens/Index';
import ContactLenses from '../../Widgets/Modals/ContactLenses/Index';
import Payments from './Payments';
import ButtonHandle from '../../styles/GlobalComponents/ButtonsHandle';
import { FormatDate, save } from './fuctions';
import PaymentModal from '../../Widgets/Modals/PaymentsModal/PaymentModal';
import IsLoading from '../../components/Loader/IsLoading';
import PdfModal from '../../Widgets/Modals/PdfModal/Index';

export default function Body({ id, sellid }) {
  const randomOs = Math.floor(Math.random() * (2000 - 1)) + 1;

  const [clientName, setClientName] = useState('');
  const [clientAdress, setClientAdress] = useState('');
  const [telefone, setTelefone] = useState('');

  const [loading, setLoading] = useState(false);

  const [sellId, setSellId] = useState(sellid);
  const [payments, setPayments] = useState([]);

  const [lastExamData, setLastExamData] = useState('');

  const [ModalFramesOnScreen, setModalFramesOnScreen] = useState(false);
  const [ModalLensOnScreen, setModalLensOnScreen] = useState(false);
  const [ModalContactLensOnScreen, setModalContactLensOnScreen] = useState(false);
  const [ModalAddPaymentsOnScreen, setModalAddPaymentsOnScreen] = useState(false);
  const [ModalPdfOnScreen, setModalPdfOnScreen] = useState(false);

  const [sellOs, setSellOs] = useState('');
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
  const [entregue, setEntregue] = useState('N??o entregue');

  const [dataPayment, setDataPayment] = useState({
    paymentMethod: '',
    paymentValue: '',
  });

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const examResponse = await axios.get(`/clients/${id}/lastexam`);
        setLastExamData(examResponse.data);
        const { data } = await axios.get(`/clients/${id}`);
        setClientName(data[0].nome);
        setClientAdress(data[0].endere??o);
        setTelefone(data[0].telefone);
        if (sellId) {
          const sellResponse = await axios.get(`/clients/${id}/sells/${sellId}`);
          const paymentsResponse = await axios.get(`/clients/payments/${id}/${sellId}`);

          setPayments(paymentsResponse.data);

          const sell = sellResponse.data[0];
          const odSign = sell.esfOd[0];
          const oeSign = sell.esfOe[0];

          setEsfOdSign(odSign);
          setEsfOeSign(oeSign);
          setSellDate(FormatDate(sell.CriadoEm));

          setEsfOd(sell.esfOd.substring(1));
          setCilOd(sell.cilOd.substring(1));
          setEixoOd(sell.eixoOd);
          setEsfOe(sell.esfOe.substring(1));
          setCilOe(sell.cilOe.substring(1));
          setEixoOe(sell.eixoOe);

          setAdicao(sell.adicao);
          setAlturaOd(sell.alturaOd);
          setAlturaOe(sell.alturaOe);
          setDnpOd(sell.dnpOd);
          setDnpOe(sell.dnpOe);
          setArmacao(sell.armacao);
          setLente(sell.lente);
          setValorArm(sell.valorArm);
          setValorLen(sell.valorLen);
          setLenteContato(sell.lenteContato);
          setValorLenContato(sell.valorLenContato);
          setTotal(sell.total);
          setPago(sell.pago);
          setSellOs(sell.os);

          setInputBlock(true);
        }
        setLoading(false);
      } catch (error) {
        setLastExamData('');
      }
    }
    getData();
  }, [id, sellId]);

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

  useEffect(() => {
    if (payments.length < 1) {
      setResta(valorDaCompra);
      return;
    }

    let paidValue = 0;

    payments.forEach((payment) => {
      paidValue += Number(payment.value);
    });

    setValorPago(paidValue);
    setResta(Number(valorDaCompra) - Number(paidValue));
  }, [payments, valorDaCompra]);

  const PaymentValidate = () => {
    let valid = true;
    if (armacao && !valorArm) {
      setIsValidValueArm(false);
      valid = false;
    }
    if (lente && !valorLen) {
      setIsValidValueLen(false);
      valid = false;
    }
    if (lenteContato && !valorLenContato) {
      setIsValidValueLenContato(false);
      valid = false;
    }
    if (!total) {
      valid = false;
    }
    return valid;
  };

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

  const handleAddSaveClick = () => {
    async function request() {
      try {
        const responseId = await save(id, {
          os: randomOs,
          esfOd: `${EsfOdSign}${esfOd}`,
          cilOd: `-${cilOd}`,
          eixoOd,

          esfOe: `${EsfOeSign}${esfOe}`,
          cilOe: `-${cilOe}`,
          eixoOe,

          adicao,

          dnpOd,
          alturaOd,
          dnpOe,
          alturaOe,

          armacao,
          valorArm,
          lente,
          valorLen,
          lenteContato,
          valorLenContato,
          total,
          resta,
          pago: Number(valorPago),
          entregue,
        });
        setSellId(responseId);
        history.push(`/edit-sell/${id}/${responseId}`);
        setModalAddPaymentsOnScreen(true);
      } catch (error) {
        return 1;
      }
      return 0;
    }
    request();
  };

  const handleAddPaymentClick = () => {
    setModalAddPaymentsOnScreen(true);
  };

  const PdfContent = {
    clientPhone: telefone,
    clientName,
    clientAdress,
    telefone,
    armacao,
    lente,
    valorArm,
    valorLen,
    total,
    resta,
    pago: Number(valorPago),
    sellDate: sellDate || FormatDate(Date.now()),
    esfOd: `${EsfOdSign}${esfOd}`,
    cilOd: `-${cilOd}`,
    esfOe: `${EsfOeSign}${esfOe}`,
    cilOe: `-${cilOe}`,
    eixoOd,
    eixoOe,
    adicao,
    dnpOd,
    dnpOe,
    sellOs: sellOs.toString() || randomOs.toString(),
  };

  return (
    <>
      <FormBodyContainer>
        <IsLoading loading={loading} />
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
        <PaymentModal
          onScreen={ModalAddPaymentsOnScreen}
          setOnScreen={setModalAddPaymentsOnScreen}
          total={Number(total)}
          resta={Number(resta)}
          clientId={id}
          sellId={sellId}
          setPayments={setPayments}
          dataPayment={dataPayment}
        />
        <PdfModal
          onScreen={ModalPdfOnScreen}
          setOnScreen={setModalPdfOnScreen}
          PdfContent={PdfContent}
        />
        {sellDate && (
          <>
            <div className="title">
              {`Venda dia: ${sellDate}`}
            </div>
            <div className="title">
              {`OS: ${sellOs}`}
            </div>
          </>
        )}
        <div className="title">
          EXAME
        </div>
        <div className="sub-title">
          OLHO DIREITO
        </div>
        <div className="input--container">
          <InputSign inputBlock={inputBlock} sign={EsfOdSign} setSign={setEsfOdSign} label="ESF??RICO" valid={isValidesfOd} setValidText={setIsValidEsfOd} setText={setEsfOd} text={esfOd} type="number" />
          <InputSign inputBlock={inputBlock} cil sign="-" label="CILINDRICO" valid={isValidCilOd} setValidText={setIsValidCilOd} setText={setCilOd} text={cilOd} type="number" />
          <Input inputBlock={inputBlock} label="EIXO" valid={isValidEixoOd} setValidText={setIsValidEixoOd} setText={setEixoOd} text={eixoOd} type="number" />
        </div>
        <div className="sub-title">
          OLHO ESQUERDO
        </div>
        <div className="input--container">
          <InputSign inputBlock={inputBlock} sign={EsfOeSign} setSign={setEsfOeSign} label="ESF??RICO" valid={isValidesfOe} setValidText={setIsValidEsfOe} setText={setEsfOe} text={esfOe} type="number" />
          <InputSign inputBlock={inputBlock} cil sign="-" label="CILINDRICO" valid={isValidCilOe} setValidText={setIsValidCilOe} setText={setCilOe} text={cilOe} type="number" />
          <Input inputBlock={inputBlock} label="EIXO" valid={isValidEixoOe} setValidText={setIsValidEixoOe} setText={setEixoOe} text={eixoOe} type="number" />
        </div>
        <div className="input--container">
          <Input inputBlock={inputBlock} label="ADI????O" valid={isValidAdicao} setValidText={setIsValidAdicao} setText={setAdicao} text={adicao} type="number" />
        </div>
        {lastExamData && !sellId && (
          <div className="input--container--start">
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
          ARMA????O
        </div>
        <div className="input--container">
          <SelectModal
            block={inputBlock}
            onClick={() => !inputBlock && setModalFramesOnScreen(true)}
          >
            <span>ARMA????O:</span>
            <span className="frame">{armacao}</span>
          </SelectModal>
          <Input inputBlock={inputBlock} label="VALOR" valid={isValidValueArm} setValidText={setIsValidValueArm} setText={setValorArm} text={valorArm} type="number" />
        </div>
        <div className="sub-title">
          LENTE
        </div>
        <div className="input--container">
          <SelectModal
            block={inputBlock}
            onClick={() => !inputBlock && setModalLensOnScreen(true)}
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
            block={inputBlock}
            onClick={() => !inputBlock && setModalContactLensOnScreen(true)}
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

        <div className="input--container--start">
          <Button onClick={() => setModalPdfOnScreen(true)}>GERAR PDF</Button>
        </div>
        <ButtonHandle
          labelTexts={{ saveLabel: 'Finalizar e adicionar pagamento' }}
          inputBlock={inputBlock}
          setInputBlock={setInputBlock}
          id={sellId}
          handleAddSaveClick={handleAddSaveClick}
        />
      </FormBodyContainer>
      <FormBodyContainer>
        <Payments
          sellId={sellId}
          setDataPayment={setDataPayment}
          payments={payments}
          remains={Number(resta)}
          purchaseAmount={Number(valorDaCompra)}
          amountPaid={Number(valorPago)}
          handleAddPaymentClick={handleAddPaymentClick}
          setOnScreen={setModalAddPaymentsOnScreen}
        />
      </FormBodyContainer>
    </>
  );
}

Body.defaultProps = {
  sellid: '',
};

Body.propTypes = {
  id: PropTypes.string.isRequired,
  sellid: PropTypes.string,
};
