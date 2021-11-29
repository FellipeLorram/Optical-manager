import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import history from './services/history';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import store, { persistor } from './store';
import AppContext from './contexts';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContext>
          <Router history={history}>
            <GlobalStyles />
            <Routes />
          </Router>
        </AppContext>
      </PersistGate>
    </Provider>
  );
}

export default App;
