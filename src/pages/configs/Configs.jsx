import React from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import Account from '../../components/Svgs/Configs Buttons/Account';
import Logout from '../../components/Svgs/Configs Buttons/Logout';
import Notifications from '../../components/Svgs/Configs Buttons/Notifications';
import { ContainerGrid, LinkButtonSvg, PageContainer } from '../../styles/GlobalStyles';

export default function Configs() {
  const dispatch = useDispatch();
  const buttons = [
    { text: 'MINHA CONTA', svg: Account(), to: '/config/account' },
    { text: 'NOTIFICAÇÔES', svg: Notifications(), to: '/config/notifications' },
  ];

  const handleLogoutClick = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
  };

  return (
    <PageContainer
      initial={{ x: '100' }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
    >
      <ContainerGrid>
        {buttons.map((button) => (
          <LinkButtonSvg key={button.to} to={button.to}>
            <span className="icon--container">
              {button.svg}
            </span>
            <span>{button.text}</span>
          </LinkButtonSvg>
        ))}
        <LinkButtonSvg onClick={handleLogoutClick} to="/logout">
          <span className="icon--container">
            <Logout />
          </span>
          <span>SAIR</span>
        </LinkButtonSvg>
      </ContainerGrid>
    </PageContainer>
  );
}
