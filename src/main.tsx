import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from 'src/router';
import BaseLayout from 'src/components/BaseLayout';
import { persistor, store } from 'src/store';

import 'src/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BaseLayout>
          <Router />
        </BaseLayout>
      </PersistGate>
    </Provider>
  </HashRouter>
);
