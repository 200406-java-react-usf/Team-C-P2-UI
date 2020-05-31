import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import LoginComponent from './Components/LoginComponent/LoginContainer';
import NavBarComponent from './Components/NavBarComponent/NavBarContainer';
import { store } from './Store';
import { Provider } from 'react-redux';
import UserInfoComponent from './Components/AdminComponent/UserInfoComponent'

import LogoutComponent from './Components/LogoutComponent/LogoutContainer';
import RegisterComponent from './Components/RegisterComponent/RegisterContainer';
import CreateTicketComponent from './Components/CreateTicketComponent/CreateTicketComponent';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <NavBarComponent />

        <Switch>
          <Redirect  from="/" to="/login" exact />
          
          <Route path="/login" render={() => <LoginComponent /> } />

          <Route path="/logout" render={() => <LogoutComponent /> } />

          <Route path="/register" render={() => <RegisterComponent /> } />

          <Route path="/create" render={() => <CreateTicketComponent/> } />

          <Route path="/users" render={() => <UserInfoComponent /> } />

        </Switch>
      </Router>
    </Provider> 
    </>
  );
}

export default App;
