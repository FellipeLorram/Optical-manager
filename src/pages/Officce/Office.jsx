import React from 'react';
import Sellers from '../../components/Svgs/OfficeButtons/Sellers';
import Glasses from '../../components/Svgs/OfficeButtons/Glasses';
import Lens from '../../components/Svgs/OfficeButtons/Lens';
import Analytics from '../../components/Svgs/OfficeButtons/Analytics';
import { ContainerGrid, PageContainer } from '../../styles/GlobalStyles';
import Button from '../../components/Buttons/Index';

export default function Office() {
  const buttons = [
    { text: 'VENDEDORES', svg: Sellers(), to: '/officce/sellers' },
    { text: 'ARMAÇÕES', svg: Glasses(), to: '/officce/frames' },
    { text: 'LENTES', svg: Lens(), to: '/officce/lens' },
    { text: 'RELATÓRIOS', svg: Analytics(), to: '/officce/analytics' },
  ];

  return (
    <PageContainer
      initial={{ x: '100' }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
    >
      <ContainerGrid>
        {buttons.map((button) => (
          <Button type="svg-link" key={button.to} to={button.to}>
            <span className="icon--container">
              {button.svg}
            </span>
            <span>{button.text}</span>
          </Button>
        ))}
      </ContainerGrid>
    </PageContainer>
  );
}
