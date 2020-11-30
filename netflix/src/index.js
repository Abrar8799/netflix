import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './global-style';
import { firebase } from './lib/firebase1';
import { ContextFirebase } from './context/firebaseContext';

ReactDOM.render(
        <ContextFirebase.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </ContextFirebase.Provider>

    , document.getElementById('root')
);