import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import store from './store';

import GlobalStyle from './styles/globalStyle';

import Routes from './routes';

const App = () => (
  <>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </BrowserRouter>
  </>
);
export default App;
