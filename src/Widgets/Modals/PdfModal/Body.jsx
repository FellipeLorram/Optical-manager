import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';

import { BodyContainer, FooterContainer } from '../../../components/Modal/styled';
import Switch from './Switch';
import { SwitchContainer } from './styled';
import Paper from './Paper';
import Button from '../../../components/Buttons/Index';
import Pdf from '../../../components/GeneratePdf/Index';

export default function Body({
  PdfContent,
}) {
  const [labSwitch, setLabSwitch] = useState(true);
  const [clientSwitch, setClientSwitch] = useState(true);
  // const [storeSwitch, setStoreSwitch] = useState(false);

  const switchs = [
    { label: 'VIA DO LABORATÓRIO', isOn: labSwitch, setIsOn: setLabSwitch },
    { label: 'VIA DO CLIENTE', isOn: clientSwitch, setIsOn: setClientSwitch },
  ];

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <BodyContainer>
      <div style={{ display: 'none' }}>
        <Pdf
          ref={componentRef}
          PdfContent={PdfContent}
          clientSwitch={clientSwitch}
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
  PdfContent: PropTypes.object.isRequired,
};
