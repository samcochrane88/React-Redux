// Import react and reactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  return <div>Hi there! </div>;
};

// Take the react compenent and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
