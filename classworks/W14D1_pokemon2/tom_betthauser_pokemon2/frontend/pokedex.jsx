import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from "./store/store";

const store = configureStore();

window.store = store;
window.dispatch = store.dispatch;
window.getState = store.getState;

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById('root');
    ReactDOM.render(<Root />, root);
})