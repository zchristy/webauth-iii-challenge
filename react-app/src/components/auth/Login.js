import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Redirect, withRouter } from 'react-router'


import { login } from '../../actions';

class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.login(this.state.credentials)
    .then(res => {
      this.props.history.push('/users')
    })
    .catch(err => {
      console.log(err)
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='username' value={this.state.credentials.username} onChange={this.changeHandler} placeholder='username' />
          <input type='password' name='password' value={this.state.credentials.password} onChange={this.changeHandler} placeholder='password' />
          <button type='submit'>Submit</button>
        </form>
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn,
  isLoggedIn: state.isLoggedIn
});

export default connect( mapStateToProps, { login } )(withRouter(Login));
