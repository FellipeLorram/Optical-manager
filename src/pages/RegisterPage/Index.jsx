import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { isEmail } from 'validator';

import axios from '../../services/axios';
import history from '../../services/history';
import Button from '../../components/Buttons/Index';
import Input from '../../components/Input/Input';
import { PageContainer, RegisterContainer } from './styled';

export default function Register() {
  const [NextPage, setNextPage] = useState(false);

  const [isValidNome, setisValidNome] = useState(true);
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidAdminPassword, setIsValidAdminPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [isValidConfirmAdminPassword, setIsValidConfirmAdminPassword] = useState(true);
  const [invalidMessage, setInvalidMessage] = useState('');
  const [isValidAdminName, setIsValidAdminName] = useState(true);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [confirmAdminPassword, setConfirmAdminPassword] = useState('');

  const handleNextClick = () => {
    if (!nome || nome.length < 2) {
      setisValidNome(false);
      setInvalidMessage('NOME INVÁLIDO');
      return;
    }
    if (!isEmail(email)) {
      setisValidEmail(false);
      setInvalidMessage('E-MAIL INVÁLIDO');
      return;
    }
    if (password.length < 8 || password.length > 55) {
      setIsValidPassword(false);
      setInvalidMessage('A SENHA PRECISA SER MAIOR QUE 8 E MENOR QUE 55 CARACTERES');
      return;
    }
    if (password !== confirmPassword) {
      setInvalidMessage('SENHAS DIVERGENTES');
      setIsValidPassword(false);
      return;
    }
    setNextPage(true);
  };

  const handleFinalizeClick = () => {
    if (!adminName || adminName.length < 2) {
      setIsValidAdminName(false);
      setInvalidMessage('NOME INVÁLIDO');
      return;
    }
    if (adminPassword.length < 8 || adminPassword.length > 55) {
      setIsValidAdminPassword(false);
      setInvalidMessage('A SENHA PRECISA SER MAIOR QUE 8 E MENOR QUE 55 CARACTERES');
      return;
    }
    if (adminPassword !== confirmAdminPassword) {
      setInvalidMessage('SENHAS DIVERGENTES');
      setIsValidPassword(false);
      return;
    }

    async function request() {
      try {
        await axios.post('/users/novo-usuario', {
          nome,
          email,
          password,
          adminName,
          adminPassword,
        });
        history.push('/login');
      } catch (error) {
        history.push('/register');
      }
    }
    request();
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <PageContainer>
        <div className="header-title">
          Bem vindo ao Optical Manager
        </div>
        {!NextPage ? (
          <RegisterContainer
            initial={{ x: '-200' }}
            animate={{ x: 0 }}
            exit={{ x: 200 }}
            transition={{ duration: 0.1 }}
          >
            <div style={{ color: '#808191', fontSize: '1rem', textAlign: 'center' }}>Precisamos só de alguns dados cadastrais</div>
            <Input label="QUAL O NOME DA SUA ÓTICA?" valid={isValidNome} setisValidField={setisValidNome} text={nome} type="text" setText={setNome} invalidMessage={invalidMessage} />
            <Input label="QUAL O SEU E-MAIL?" valid={isValidEmail} setisValidField={setisValidEmail} text={email} type="text" setText={setEmail} invalidMessage={invalidMessage} />
            <Input label="CRIE SUA SENHA" valid={isValidPassword} setisValidField={setIsValidPassword} text={password} type="text" setText={setPassword} invalidMessage={invalidMessage} />
            <Input label="CONFIRME SUA SENHA" valid={isValidConfirmPassword} setisValidField={setIsValidConfirmPassword} text={confirmPassword} type="text" setText={setConfirmPassword} invalidMessage={invalidMessage} />
            <Button onClick={handleNextClick}>PRÓXIMO</Button>
          </RegisterContainer>
        ) : (
          <RegisterContainer
            initial={{ x: '-200' }}
            animate={{ x: 0 }}
            exit={{ x: 200 }}
            transition={{ duration: 0.1 }}
            center
          >
            <div style={{ color: '#808191', fontSize: '1rem', textAlign: 'center' }}>Só mais alguns dados e você já poderá usar o nosso sistema</div>
            <Input label="QUAL O NOME DO ADMINISTRADOR?" valid={isValidAdminName} setisValidField={setIsValidAdminName} text={adminName} type="text" setText={setAdminName} invalidMessage={invalidMessage} />
            <Input label="CRIE SUA SENHA DE ADMINISTRADOR" valid={isValidAdminPassword} setisValidField={setIsValidAdminPassword} text={adminPassword} type="text" setText={setAdminPassword} invalidMessage={invalidMessage} />
            <Input label="CONFIRME SUA SENHA DE ADMINISTRADOR" valid={isValidConfirmAdminPassword} setisValidField={setIsValidConfirmAdminPassword} text={confirmAdminPassword} type="text" setText={setConfirmAdminPassword} invalidMessage={invalidMessage} />
            <Button onClick={handleFinalizeClick}>FINALZAR CADASTRO</Button>

          </RegisterContainer>
        )}
      </PageContainer>
    </AnimatePresence>
  );
}
