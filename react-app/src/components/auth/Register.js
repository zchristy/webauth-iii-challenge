import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'

import { register, login } from '../../actions';

class Register extends Component {
  state = {
    credentials: {
      username: '',
      password: '',
      role: '',
      rolePassword: ''
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

    this.props.register(this.state.credentials)
  }

  redirect = () => {
    setTimeout(() => {
      this.props.history.push(`/users`)
    }, 3000)
  }

  render() {
    if(this.props.isRegistered) {
      this.redirect()
      return (
        <div>
          <p>{this.props.registerdUser.message}</p>
          <Loader type="ThreeDots" color="black" height={10} width={10} />
        </div>
      )
    } else {
      return (
        <div>
          <h1>Register</h1>
          <form onSubmit={this.submitHandler}>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.changeHandler}
              placeholder='Username'
              required
            />
            <input
              type='password'
              name='password'
              value={this.state.credentials.password}
              onChange={this.changeHandler}
              placeholder='Password'
              required
            />
            <input
              type='text'
              name='role'
              value={this.state.credentials.fullName}
              onChange={this.changeHandler}
              placeholder='Role'
              required
          />
            <input
              type='password'
              name='rolePassword'
              value={this.state.credentials.email}
              onChange={this.changeHandler}
              placeholder='Role Password'
              required
            />

            <button type='submit'>{this.props.registering ? <Loader type="ThreeDots" color="black" height={10} width={10} /> : 'Submit'}</button>
          </form>
          {this.props.error && <p>{this.props.error}</p>}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  registerdUser: state.registerReducer.registerdUser,
  registering: state.registerReducer.registering,
  isRegistered: state.registerReducer.isRegistered,
  error: state.registerReducer.error
});

export default connect( mapStateToProps, { register, login } )(Register);
