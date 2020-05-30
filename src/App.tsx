import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import LoginComponent from './Components/LoginComponent/LoginContainer';
import NavBarComponent from './Components/NavBarComponent/NavBarContainer';
import { store } from './Store';
import { Provider } from 'react-redux';
import RegisterComponent from './Components/RegisterComponent/RegisterContainer';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <NavBarComponent />

        <Switch>
          <Route path="/login" render={() => <LoginComponent /> } />
          <Route path="/register" render={() => <RegisterComponent /> } />
        </Switch>
      </Router>
    </Provider> 
    </>
  );
}

export default App;
