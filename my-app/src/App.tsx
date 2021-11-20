import React, { useState } from 'react';
import './App.css';
import InputPlusMinusComponent from './components/pages/TextAdder';
import InputMultiplyComponent from './components/pages/ShowText';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={InputPlusMinusComponent} />

          <Route exact path='/page2' component={InputMultiplyComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
