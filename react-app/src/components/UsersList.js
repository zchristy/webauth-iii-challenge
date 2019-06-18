import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { getUsers } from '../actions';


class UsersList extends Component {

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    console.log(this.props)
    if(this.props.fetchingUsers) {
      return <Loader type="Rings" color="#00BFFF" height="90" width="60" />
    } else {
      return (
        <div>
          <div>
            {this.props.usersList ? this.props.usersList.map(user => {
              return (
                <div key={user.id}>
                  <h4>{user.username}</h4>
                </div>
              )
            }) : <div>{this.props.error}</div>}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  usersList: state.fetchUsersReducer.usersList,
  fetchingUsers: state.fetchUsersReducer.fetchingUsers,
  error: state.fetchUsersReducer.error
});

export default connect( mapStateToProps, { getUsers } )(UsersList);
