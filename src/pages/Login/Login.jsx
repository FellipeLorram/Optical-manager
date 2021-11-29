import React, { useEffect, useState } from 'react';
import { isEmail } from 'validator';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import * as actions from '../../store/modules/auth/actions';

import {
  Container,
  LoginContainer,
} from './styled';
import Input from './Input';
import Promotion from './Promotion';
import { Button } from '../../styles/GlobalStyles';
import IsLoading from '../../components/Loader/IsLoading';
import Logo from '../../components/Svgs/Logo';

export default function Login(props) {
  const [isValidEmail, setisValidEmail] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.isLoading);
  const prevPath = get(props, 'location.state.prevPath', '/');

  const handleSubmmit = (e) => {
    e.preventDefault();
    let formErros = false;
    if (!email) return;
    if (!isEmail(email)) {
      setisValidEmail(false);
      formErros = true;
    }
    if (formErros) return;
    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container
      exit={{ x: 2000 }}
      transition={{ duration: 0.5 }}
    >
      <IsLoading loading={loading} />
      <LoginContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="header">
          <Logo />
        </div>
        <div className="sub-title">
          Faça login para entrar no sistema
        </div>
        <form
          onSubmit={(e) => handleSubmmit(e)}
          className="body"
        >
          <Input setisValidEmail={setisValidEmail} valid={isValidEmail} type="text" text={email} setText={setEmail} label="EMAIL" />
          <Input setisValidEmail={setisValidEmail} valid type="password" text={password} setText={setPassword} label="SENHA" />
          <LogButton />
        </form>
        <div className="footer">
          <span className="footer--text">Ainda não utiliza nossos serviços? </span>
          <Link to="/register">Registre-se</Link>
        </div>
      </LoginContainer>
      <Promotion />
    </Container>
  );
}

function LogButton() {
  return (
    <Button mW>LOGAR</Button>
  );
}
