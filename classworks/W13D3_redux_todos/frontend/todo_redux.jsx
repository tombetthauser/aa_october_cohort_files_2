import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/todoApp';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<TodoApp />, root);
});