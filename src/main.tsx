import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Router from 'src/router';
import BaseLayout from 'src/components/BaseLayout';
import { store } from 'src/store';
import 'src/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Provider store={store}>
      <BaseLayout>
        <Router />
      </BaseLayout>
    </Provider>
  </HashRouter>
);
