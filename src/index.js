/*
    Index.js is a primary component of any react app because 
    if we want to create routes so the index component 
    handles the all routes in one place.
*/

// import the react because we want to do work with jsx.
import React from 'react';

// import ReactDOM for dom manipulation.
import ReactDOM from 'react-dom';

// import App, make easy to find components.
import App from './App';

// render the App as a parent component.
ReactDOM.render(
    <App/>,
    // Apply the App component in root div.
    document.getElementById('root')
);