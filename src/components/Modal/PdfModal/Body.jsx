import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';

import { BodyContainer, FooterContainer } from '../styled';
import Switch from './Switch';
import { SwitchContainer } from './styled';
import Paper from './Paper';
import { Button } from '../../../styles/GlobalStyles';
import Pdf from '../../GeneratePdf/Index';

export default function Body({
  handlePrintOutClick,
  PdfContent,
}) {
  const [labSwitch, setLabSwitch] = useState(true);
  const [clientSwitch, setClientSwitch] = useState(true);
  const [storeSwitch, setStoreSwitch] = useState(false);

  const switchs = [
    { label: 'VIA DO LABORATÓRIO', isOn: labSwitch, setIsOn: setLabSwitch },
    { label: 'VIA DO CLIENTE', isOn: clientSwitch, setIsOn: setClientSwitch },
    { label: 'VIA DA LOJA', isOn: storeSwitch, setIsOn: setStoreSwitch },
  ];

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleClick = () => {
    handlePrintOutClick(clientSwitch, storeSwitch, labSwitch);
  };

  return (
    <BodyContainer>
      <div style={{ display: 'none' }}>
        <Pdf
          ref={componentRef}
          PdfContent={PdfContent}
          clientSwitch={clientSwitch}
          storeSwitch={storeSwitch}
          labSwitch={labSwitch}
        />
      </div>
      <div className="column">
        <div className="row">
          <div className="column">
            {switchs.map((swit) => (
              <SwitchContainer key={swit.label}>
                <Switch label={swit.label} isOn={swit.isOn} setIsOn={swit.setIsOn} />
              </SwitchContainer>
            ))}
          </div>
          <Paper switchs={{
            labSwitch,
            clientSwitch,
            storeSwitch,
          }}
          />
        </div>
        <FooterContainer>
          <Button
            onClick={handlePrint}
          >
            IMPRIMIR
          </Button>
        </FooterContainer>
      </div>
    </BodyContainer>
  );
}
Body.propTypes = {
  handlePrintOutClick: PropTypes.func.isRequired,
  PdfContent: PropTypes.object.isRequired,
};
