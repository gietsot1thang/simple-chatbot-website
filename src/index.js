import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
import THEME from './utils/theme';
import { Provider } from 'react-redux';
import store from './redux/store';

const cmp = (
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </Provider>
)

render(cmp, document.getElementById('root'));

serviceWorker.unregister();
