import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import LoginComponent from './Components/LoginComponent/LoginContainer';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import { store } from './Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
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
