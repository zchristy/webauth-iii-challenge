import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';

import './App.css';

import Nav from './components/Nav';
import UsersList from './components/UsersList';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute exact path="/users" component={UsersList} />
        </div>
      </Router>
    );
  }
}

export default App;
