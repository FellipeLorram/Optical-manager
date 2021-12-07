import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BodyContainer } from '../styled';
import Switch from './Switch';
import { SwitchContainer } from './styled';
import Paper from './Paper';
import { Button } from '../../../styles/GlobalStyles';

export default function Body() {
  const [labSwitch, setLabSwitch] = useState(true);
  const [clientSwitch, setClientSwitch] = useState(true);
  const [storeSwitch, setStoreSwitch] = useState(true);
  const [paymentSwitch, setPaymentSwitch] = useState(true);

  const switchs = [
    { label: 'VIA DO LABORATÓRIO', isOn: labSwitch, setIsOn: setLabSwitch },
    { label: 'VIA DO CLIENTE', isOn: clientSwitch, setIsOn: setClientSwitch },
    { label: 'VIA DA LOJA', isOn: storeSwitch, setIsOn: setStoreSwitch },
    { label: 'COMPROVANTE DE PAGAMENTO', isOn: paymentSwitch, setIsOn: setPaymentSwitch },
  ];
  return (
    <BodyContainer>
      <div className="row">
        <div
          className="column"
        >
          {switchs.map((swit) => (
            <SwitchContainer>
              <Switch label={swit.label} isOn={swit.isOn} setIsOn={swit.setIsOn} />
            </SwitchContainer>
          ))}
        </div>
        <div className="column">
          <Paper switchs={{
            labSwitch,
            clientSwitch,
            storeSwitch,
            paymentSwitch,
          }}
          />
          <Button>GERAR</Button>
        </div>
      </div>
    </BodyContainer>
  );
}
