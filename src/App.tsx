import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import LoginComponent from './Components/LoginComponent/LoginContainer';
import NavBarComponent from './Components/NavBarComponent/NavBarContainer';
import { store } from './Store';
import { Provider } from 'react-redux';

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
          <Route path="/login" render={() => <LoginComponent /> } />

          <Route path="/logout" render={() => <LogoutComponent /> } />

          <Route path="/register" render={() => <RegisterComponent /> } />

          <Route path="/create" render={() => <CreateTicketComponent/> } />

        </Switch>
      </Router>
    </Provider> 
    </>
  );
}

export default App;
