import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import LoginComponent from './Components/LoginComponent/LoginComponent';

function App() {
  return (
    <>
      <Router>


        <Switch>
          <Route path="/login" render={() => <LoginComponent/> } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
