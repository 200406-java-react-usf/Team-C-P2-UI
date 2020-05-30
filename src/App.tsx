import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import LoginComponent from './Components/LoginComponent/LoginComponent';
import { store } from './Store';
import { Provider } from 'react-redux';
import UserInfoComponent from './Components/AdminComponent/UserInfoComponent'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <UserInfoComponent />
      <Router>


        <Switch>
          <Route path="/login" render={() => <LoginComponent/> } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
