import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import LoginComponent from './Components/LoginComponent/LoginContainer';
import NavBarComponent from './Components/NavBarComponent/NavBarContainer';
import { store } from './Store';
import { Provider } from 'react-redux';
import UserInfoComponent from './Components/AdminComponent/UserInfoComponent'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <UserInfoComponent />
    <Provider store={store}>
      <Router>
        <NavBarComponent />

        <Switch>
          <Route path="/login" render={() => <LoginComponent /> } />
        </Switch>
      </Router>
    </Provider> 
    </>
  );
}

export default App;
