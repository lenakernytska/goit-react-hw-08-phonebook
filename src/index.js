import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import 'modern-normalize/modern-normalize.css';
import './style.css';
import { Provider } from 'react-redux';
import {store} from "./redux/store";
// import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}> */}
      <BrowserRouter>
        <App />
        </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


