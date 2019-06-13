import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'

class Nav extends Component {
  submitHandler = e => {
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }
  render() {
    const token = localStorage.getItem('token')
    return (
      <nav>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <button onClick={this.submitHandler}>Logout</button>
      </nav>
    );
  }
}

export default withRouter(Nav);
