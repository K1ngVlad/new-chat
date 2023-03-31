import React from 'react';
import { app } from './firebase';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom/dist';

import { store } from './store';
import { App } from './App';

import './index.css';

import { GlobalProvider } from './context';

const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);
const storageRef = ref(storage);

console.log(auth);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GlobalProvider value={{ auth, db, storage, storageRef }}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </GlobalProvider>
);
