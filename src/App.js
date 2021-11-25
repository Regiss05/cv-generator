import './App.css';
import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Swich} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experiance from './components/Experiance';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

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
