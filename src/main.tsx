import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from 'src/router';
import BaseLayout from 'src/components/BaseLayout';
import { persistor, store } from 'src/store';
import ErrorBoundary from 'src/components/ErrorBoundary';
import 'src/localization/localization';
import 'src/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ErrorBoundary>
          <BaseLayout>
            <Router />
          </BaseLayout>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
