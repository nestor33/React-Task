import React, { useState } from 'react';
import './App.css';
import InputPlusMinusComponent from './components/pages/TextAdder';
import ShowText from './components/pages/ShowText';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={InputPlusMinusComponent} />

          <Route exact path='/page2' component={ShowText} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
