import React from 'react';

const click = function() {
    alert("don't do that...")
}

const todoApp = () => {
    return (
    <header>
        <h1>tomblr</h1>
        <p>less awful than tumblr</p>
        <hr/>
        <button onClick={click}>make a new blog</button>
        <br/>
        <br/>
        <div id="blogs"></div>
    </header>)
}

export default todoApp;