import './App.css';
import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Swich} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Router exact path = "/" component = {Home} />
        </>
      </Router>
    </div>
  );
}

export default App;
