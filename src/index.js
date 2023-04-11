import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App/App';
import { BallTriangle } from 'react-loading-icons'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<BallTriangle />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);