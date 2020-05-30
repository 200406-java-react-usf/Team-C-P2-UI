import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import LoginComponent from './Components/LoginComponent/LoginContainer';
import NavBarComponent from './Components/NavBarComponent/NavBarContainer';
import { store } from './Store';
import { Provider } from 'react-redux';
import LogoutComponent from './Components/LogoutComponent/LogoutContainer';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <NavBarComponent />

        <Switch>
          <Route path="/login" render={() => <LoginComponent /> } />
          <Route path="/logout" render={() => <LogoutComponent /> } />
        </Switch>
      </Router>
    </Provider> 
    </>
  );
}

export default App;
