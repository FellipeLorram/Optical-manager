import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

export default function AppContext({ children }) {
  const [Location, setLocation] = useState(globalState.Location);

  return (
    <GlobalContext.Provider
      value={{
        setLocation,
        Location,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

AppContext.propTypes = {
  children: PropTypes.element.isRequired,
};
