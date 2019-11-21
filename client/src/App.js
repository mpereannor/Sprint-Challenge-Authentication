import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/login';
import Homepage from './components/homepage';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />
    } else {
      return <Redirect to="/login" />
    }
  }} />
}

function App() {
  return (
    <div className="App">
       <Route path="/login" component={Login}/>
       <ProtectedRoute path="/homepage" component={Homepage}/>
    </div>
  );
}
export default App;
