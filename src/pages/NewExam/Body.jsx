import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import history from '../../services/history';
import axios from '../../services/axios';
import { FormBodyContainer } from '../../styles/GlobalStyles';
import Input from '../../components/Input/Input';
import InputSign from '../../styles/GlobalComponents/InputSign';
import ButtonsHandle from '../../styles/GlobalComponents/ButtonsHandle';

export default function Body({ id, examId }) {
  const [examDate, setExamDate] = useState('');
  const [inputBlock, setInputBlock] = useState(false);

  const [anaminese, setAnaminese] = useState('');
  const [EsfOdSign, setEsfOdSign] = useState('+');
  const [EsfOeSign, setEsfOeSign] = useState('-');

  const [oftOd, setOftOd] = useState('');
  const [oftOe, setOftOe] = useState('');

  const [tonoOd, setTonoOd] = useState('');
  const [tonoOe, setTonoOe] = useState('');

  const [motilidade, setMotilidade] = useState('');
  const [PPC, setPPC] = useState('');
  const [PPA, setPPA] = useState('');

  const [LsEsfOd, setLsEsfOd] = useState('');
  const [isValidLsEsfOd, setIsValidLsEsfOd] = useState(true);

  const [LsCilOd, setLsCilOd] = useState('');
  const [isValidLsCilOd, setIsValidLsCilOd] = useState(true);

  const [LsEixoOd, setLsEixoOd] = useState('');
  const [isValidLsEixoOd, setIsValidLsEixoOd] = useState(true);

  const [LsEsfOe, setLsEsfOe] = useState('');
  const [isValidLsEsfOe, setIsValidLsEsfOe] = useState(true);

  const [LsCilOe, setLsCilOe] = useState('');
  const [isValidLsCilOe, setIsValidLsCilOe] = useState(true);

  const [LsEixoOe, setLsEixoOe] = useState('');
  const [isValidLsEixoOe, setIsValidLsEixoOe] = useState(true);

  const [LsAdd, setLsAdd] = useState('');
  const [isValidLsAdd, setIsValidLsAdd] = useState(true);

  const [rxEsfOd, setRxEsfOd] = useState('');
  const [isValidEsfOd, setIsValidEsfOd] = useState(true);

  const [rxCilOd, setRxCilOd] = useState('');
  const [isValidCilod, setIsValidCilod] = useState(true);

  const [rxEixoOd, setRxEixoOd] = useState('');
  const [isValidEixoOd, setIsValidEixoOd] = useState(true);

  const [rxEsfOe, setRxEsfOe] = useState('');
  const [isValidEsfOe, setIsValidEsfOe] = useState(true);

  const [rxCilOe, setrxCilOe] = useState('');
  const [isValidCiloe, setIsValidCiloe] = useState(true);

  const [rxEixoOe, setRxEixoOe] = useState('');
  const [isValidEixoOe, setIsValidEixoOe] = useState(true);

  const [rxAdd, setRxAdd] = useState('');
  const [isValidRxAdd, setIsValidRxAdd] = useState(true);

  useEffect(() => {
    if (!examId) return;
    async function getData() {
      try {
        const { data } = await axios.get(`/clients/${id}/exams/${examId}`);
        const odSign = data[0].rxEsfOd[0];
        const oeSign = data[0].rxEsfOe[0];

        setEsfOdSign(odSign);
        setEsfOeSign(oeSign);

        setAnaminese(data[0].anaminese);

        setLsEsfOd(data[0].LsEsfOd.substring(1));
        setLsCilOd(data[0].LsCilOd.substring(1));
        setLsEixoOd(data[0].LsEixoOd);
        setLsEsfOe(data[0].LsEsfOe.substring(1));
        setLsCilOe(data[0].LsCilOe.substring(1));
        setLsEixoOe(data[0].LsEixoOe);
        setLsAdd(data[0].LsAdd);

        setTonoOd(data[0].tonoOd);
        setTonoOe(data[0].tonoOe);

        setPPC(data[0].PPC);
        setPPA(data[0].PPA);
        setMotilidade(data[0].motilidade);
        setOftOd(data[0].oftOd);
        setOftOe(data[0].oftOe);

        setRxEsfOd(data[0].rxEsfOd.substring(1));
        setRxCilOd(data[0].rxCilOd.substring(1));
        setRxEixoOd(data[0].rxEixoOd);
        setRxEsfOe(data[0].rxEsfOe.substring(1));
        setrxCilOe(data[0].rxCilOe.substring(1));
        setRxEixoOe(data[0].rxEixoOe);
        setRxAdd(data[0].rxAdd);
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const date = new Date(data[0].CriadoEm).toLocaleDateString('pt-BR', options);
        setExamDate(date);
        setInputBlock(true);
      } catch (error) {
        history.push(`/client/${id}`);
      }
    }
    getData();
  }, [id, examId]);

  const handleClickSaveButton = () => {
    // LENSOMETRIA VALIDATIONS

    if ((LsAdd && LsAdd[LsAdd.length - 1] !== '0') && (LsAdd && LsAdd[LsAdd.length - 1] !== '5')) {
      setIsValidLsAdd(false);
      return;
    }
    if ((LsEsfOd && LsEsfOd[LsEsfOd.length - 1] !== '0') && (LsEsfOd && LsEsfOd[LsEsfOd.length - 1] !== '5')) {
      setIsValidLsEsfOd(false);
      return;
    }
    if ((LsCilOd && LsCilOd[LsCilOd.length - 1] !== '0') && (LsCilOd && LsCilOd[-1] !== '5')) {
      setIsValidLsCilOd(false);
      return;
    }
    if ((LsEsfOe && LsEsfOe[LsEsfOe.length - 1] !== '0') && (LsEsfOe && LsEsfOe[LsEsfOe.length - 1] !== '5')) {
      setIsValidLsEsfOe(false);
      return;
    }
    if ((LsCilOe && LsCilOe[LsCilOe.length - 1] !== '0') && (LsCilOe && LsCilOe[LsCilOe.length - 1] !== '5')) {
      setIsValidLsCilOe(false);
      return;
    }
    if (LsCilOd && !LsEixoOd) {
      setIsValidLsEixoOd(false);
      return;
    }
    if (LsCilOe && !LsEixoOe) {
      setIsValidLsEixoOe(false);
      return;
    }
    if (Number(LsEixoOd) > 180) {
      setIsValidLsEixoOd(false);
      return;
    }
    if (Number(LsEixoOe) > 180) {
      setIsValidLsEixoOe(false);
      return;
    }

    // RX FINAL VALIDATIONS
    if ((rxAdd && rxAdd[rxAdd.length - 1] !== '0') && (rxAdd && rxAdd[rxAdd.length - 1] !== '5')) {
      setIsValidRxAdd(false);
      return;
    }
    if ((rxEsfOe && rxEsfOe[rxEsfOe.length - 1] !== '0') && (rxEsfOe && rxEsfOe[rxEsfOe.length - 1] !== '5')) {
      setIsValidEsfOe(false);
      return;
    }
    if ((rxEsfOd && rxEsfOd[rxEsfOd.length - 1] !== '0') && (rxEsfOd && rxEsfOd[rxEsfOd.length - 1] !== '5')) {
      setIsValidEsfOd(false);
      return;
    }
    if ((rxCilOd && rxCilOd[rxCilOd.length - 1] !== '0') && (rxCilOd && rxCilOd[rxCilOd.length - 1] !== '5')) {
      setIsValidCilod(false);
      return;
    }
    if ((rxCilOe && rxCilOe[rxCilOe.length - 1] !== '0') && (rxCilOe && rxCilOe[rxCilOe.length - 1] !== '5')) {
      setIsValidCiloe(false);
      return;
    }
    if (rxCilOd && !rxEixoOd) {
      setIsValidEixoOd(false);
      return;
    }
    if (rxCilOe && !rxEixoOe) {
      setIsValidEixoOe(false);
      return;
    }
    if (Number(rxEixoOe) > 180) {
      setIsValidEixoOe(false);
      return;
    }
    if (Number(rxEixoOd) > 180) {
      setIsValidEixoOd(false);
      return;
    }
    async function request() {
      try {
        if (examId) {
          await axios.put(`/clients/${id}/exams/${examId}`, {
            anaminese,
            oftOd,
            oftOe,
            tonoOd,
            tonoOe,
            motilidade,
            PPC,
            PPA,
            LsEsfOd: `${EsfOdSign + LsEsfOd}`,
            LsEsfOe: `${EsfOeSign + LsEsfOe}`,
            LsCilOd: `-${LsCilOd}`,
            LsCilOe: `-${LsCilOe}`,
            LsEixoOd,
            LsEixoOe,
            LsAdd,
            rxEsfOd: `${EsfOdSign + rxEsfOd}`,
            rxCilOd: `-${rxCilOd}`,
            rxEixoOd,
            rxEsfOe: `${EsfOeSign + rxEsfOe}`,
            rxCilOe: `-${rxCilOe}`,
            rxEixoOe,
            rxAdd,
          });
        } else {
          await axios.post(`/clients/${id}/new-exam`, {
            anaminese,
            oftOd,
            oftOe,
            tonoOd,
            tonoOe,
            motilidade,
            PPC,
            PPA,
            LsEsfOd: `${EsfOdSign + LsEsfOd}`,
            LsEsfOe: `${EsfOeSign + LsEsfOe}`,
            LsCilOd: `-${LsCilOd}`,
            LsCilOe: `-${LsCilOe}`,
            LsEixoOd,
            LsEixoOe,
            LsAdd,
            rxEsfOd: `${EsfOdSign + rxEsfOd}`,
            rxCilOd: `-${rxCilOd}`,
            rxEixoOd,
            rxEsfOe: `${EsfOeSign + rxEsfOe}`,
            rxCilOe: `-${rxCilOe}`,
            rxEixoOe,
            rxAdd,
          });
        }
        await axios.patch(`/clients/${id}/inline`, {
          emFila: false,
        });
        history.push('/exams');
      } catch (error) {
        history.push(`/client/${id}`);
      }
    }
    request();
  };

  return (
    <FormBodyContainer>
      {examId && (
        <div className="sub-title">
          CONSULTA DIA
          {` ${examDate}`}
        </div>
      )}

      <div className="title">
        ANAMINESE
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="ANAMINESE" valid setText={setAnaminese} text={anaminese} type="text" />
      </div>
      <div className="title">
        OFTALMOSCOPIA
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="OLHO DIREITO" valid setText={setOftOd} text={oftOd} type="text" />
        <Input inputBlock={inputBlock} label="OLHO ESQUERDO" valid setText={setOftOe} text={oftOe} type="text" />
      </div>
      <div className="title">
        TONOMETRIA
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="OLHO DIREITO" valid setText={setTonoOd} text={tonoOd} type="text" />
        <Input inputBlock={inputBlock} label="OLHO ESQUERDO" valid setText={setTonoOe} text={tonoOe} type="text" />
      </div>
      <div className="title">
        MOTILIDADE
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="MOTILIDADE" valid setText={setMotilidade} text={motilidade} type="text" />
      </div>
      <div className="title">
        PPC/PPA
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="PPC" valid setText={setPPC} text={PPC} type="text" />
        <Input inputBlock={inputBlock} label="PPA" valid setText={setPPA} text={PPA} type="text" />
      </div>
      <div className="title">
        LENSOMETRIA
      </div>
      <div className="sub-title">
        OLHO DIREITO
      </div>
      <div className="input--container">
        <InputSign inputBlock={inputBlock} sign={EsfOdSign} setSign={setEsfOdSign} label="ESFÉRICO" valid={isValidLsEsfOd} setValidText={setIsValidLsEsfOd} setText={setLsEsfOd} text={LsEsfOd} type="number" />
        <InputSign inputBlock={inputBlock} cil sign="-" label="CILINDRICO" valid={isValidLsCilOd} setValidText={setIsValidLsCilOd} setText={setLsCilOd} text={LsCilOd} type="number" />
        <Input inputBlock={inputBlock} label="EIXO" valid={isValidLsEixoOd} setValidText={setIsValidLsEixoOd} setText={setLsEixoOd} text={LsEixoOd} type="number" />
      </div>
      <div className="sub-title">
        OLHO ESQUERDO
      </div>
      <div className="input--container">
        <InputSign inputBlock={inputBlock} sign={EsfOeSign} setSign={setEsfOeSign} label="ESFÉRICO" valid={isValidLsEsfOe} setValidText={setIsValidLsEsfOe} setText={setLsEsfOe} text={LsEsfOe} type="number" />
        <InputSign inputBlock={inputBlock} cil sign="-" label="CILINDRICO" valid={isValidLsCilOe} setValidText={setIsValidLsCilOe} setText={setLsCilOe} text={LsCilOe} type="number" />
        <Input inputBlock={inputBlock} label="EIXO" valid={isValidLsEixoOe} setValidText={setIsValidLsEixoOe} setText={setLsEixoOe} text={LsEixoOe} type="number" />
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="ADIÇÃO" valid={isValidLsAdd} setValidText={setIsValidLsAdd} setText={setLsAdd} text={LsAdd} type="text" />
      </div>
      <div className="title">
        RX FINAL
      </div>
      <div className="sub-title">
        OLHO DIREITO
      </div>
      <div className="input--container">
        <InputSign inputBlock={inputBlock} sign={EsfOdSign} setSign={setEsfOdSign} label="ESFÉRICO" valid={isValidEsfOd} setValidText={setIsValidEsfOd} setText={setRxEsfOd} text={rxEsfOd} type="number" />
        <InputSign inputBlock={inputBlock} cil sign="-" label="CILINDRICO" valid={isValidCilod} setValidText={setIsValidCilod} setText={setRxCilOd} text={rxCilOd} type="number" />
        <Input inputBlock={inputBlock} label="EIXO" valid={isValidEixoOd} setValidText={setIsValidEixoOd} setText={setRxEixoOd} text={rxEixoOd} type="number" />
      </div>
      <div className="sub-title">
        OLHO ESQUERDO
      </div>
      <div className="input--container">
        <InputSign inputBlock={inputBlock} sign={EsfOeSign} setSign={setEsfOeSign} label="ESFÉRICO" valid={isValidEsfOe} setValidText={setIsValidEsfOe} setText={setRxEsfOe} text={rxEsfOe} type="number" />
        <InputSign inputBlock={inputBlock} cil sign="-" label="CILINDRICO" valid={isValidCiloe} setValidText={setIsValidCiloe} setText={setrxCilOe} text={rxCilOe} type="text" />
        <Input inputBlock={inputBlock} valid={isValidEixoOe} setValidText={setIsValidEixoOe} label="EIXO" setText={setRxEixoOe} text={rxEixoOe} type="number" />
      </div>
      <div className="input--container">
        <Input inputBlock={inputBlock} label="ADIÇÃO" valid={isValidRxAdd} setValidText={setIsValidRxAdd} setText={setRxAdd} text={rxAdd} type="number" />
      </div>
      <ButtonsHandle
        inputBlock={inputBlock}
        setInputBlock={setInputBlock}
        id={examId}
        handleAddSaveClick={handleClickSaveButton}
      />
    </FormBodyContainer>
  );
}

Body.defaultProps = {
  examId: '',
};

Body.propTypes = {
  id: PropTypes.string.isRequired,
  examId: PropTypes.string,
};
