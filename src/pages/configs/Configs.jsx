import React from 'react';

import Account from '../../components/Svgs/Configs Buttons/Account';
import Logout from '../../components/Svgs/Configs Buttons/Logout';
import Notifications from '../../components/Svgs/Configs Buttons/Notifications';
import { ContainerGrid, LinkButtonSvg, PageContainer } from '../../styles/GlobalStyles';

export default function Configs() {
  const buttons = [
    { text: 'MINHA CONTA', svg: Account(), to: '/config/account' },
    { text: 'NOTIFICAÇÔES', svg: Notifications(), to: '/config/notifications' },
    { text: 'SAIR', svg: Logout(), to: '/config/logout' },
  ];

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
      </ContainerGrid>
    </PageContainer>
  );
}
