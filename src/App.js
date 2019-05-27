import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Home from './pages/home';
import GlobalStyle from './styles/globalStyle';

const App = () => (
  <>
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  </>
);
export default App;
