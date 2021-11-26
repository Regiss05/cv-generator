import './App.css';
import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Education from './components/Education';
import Experiance from './components/Experiance';
// import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
// import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Router exact path = "/" component = {Home} />
          <Switch>
            {/* <Route path="/about" component = {About} /> */}x
            <Route path="/education" component = {Education} />
            <Route path="/experiance" component = {Experiance} />
            {/* <Route path="/navbar" component = {Navbar} /> */}
            <Route path="/portfolio" component = {Portfolio} />
            {/* <Route path="/profile" component = {Profile} /> */}
            <Route path="/skills" component = {Skills} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
