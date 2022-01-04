import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ContactLens } from './styled';
import { BodyContainer, Choice, CurrentContentContainer } from '../../../components/Modal/styled';
import { ContainerGrid } from '../../../styles/GlobalStyles';
import ContactLenses from './ContactLenses';
import OtherContactLens from './OtherContactLens';

export default function Body({
  setLenContactLenses, setOnScreen, onScreen,
}) {
  const [contactLensOnScreen, setContactLensOnScreen] = useState(true);
  const [Other, setOther] = useState(false);

  const handleChoiceClick = (set) => {
    setContactLensOnScreen(false);
    setOther(false);
    set(true);
  };

  const handleClickContactLenses = (lens) => {
    setLenContactLenses(lens);
    setOnScreen(false);
  };

  return (
    <BodyContainer>
      <div className="column">
        <CurrentContentContainer>
          <Choice
            onClick={() => handleChoiceClick(setContactLensOnScreen)}
            selected={contactLensOnScreen}
          >
            LENTES DE CONTATO
          </Choice>
          <Choice
            onClick={() => handleChoiceClick(setOther)}
            selected={Other}
          >
            OUTRA
          </Choice>
        </CurrentContentContainer>
        {onScreen && contactLensOnScreen && (
          <ContainerGrid overflowY noP gap=".5rem">
            {ContactLenses.map((contact) => (
              <ContactLens
                onClick={() => handleClickContactLenses(contact)}
                key={contact}
              >
                {contact}
              </ContactLens>
            ))}
          </ContainerGrid>
        )}
        {onScreen && Other && (
          <OtherContactLens setLen={setLenContactLenses} setOnScreen={setOnScreen} />
        )}
      </div>
    </BodyContainer>
  );
}

Body.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  setLenContactLenses: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
