import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container, InputSearch, UserLogo } from './styled';

export default function TopBar() {
  const [message, setMessage] = useState('');
  const [light, setLight] = useState(false);
  const userLogoName = useSelector((state) => state.auth.currentUserName);

  useEffect(() => {
    const date = new Date().getHours();
    if (date >= 0 && date < 11) setMessage('Bom dia, ');
    else if (date >= 12 && date < 18) setMessage('Boa tarde, ');
    else setMessage('Boa noite, ');
  }, []);

  return (
    <Container light={light}>
      <UserLogo>{`${message}${userLogoName}`}</UserLogo>
      <InputSearch onBlur={() => setLight(false)} onFocus={() => setLight(true)} type="text" placeholder="Buscar Cliente..." />
    </Container>
  );
}
