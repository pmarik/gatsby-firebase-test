import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class UserList extends Component {
  _initFirebase = false;

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.setState({ loading: true });

      // this.props.firebase.users().on('value', snapshot => {
      //   const usersObject = snapshot.data();

      //   const usersList = Object.keys(usersObject).map(key => ({
      //     ...usersObject[key],
      //     uid: key,
      //   }));

      //   this.setState({
      //     users: usersList,
      //     loading: false,
      //   });
      // });

      // TODO updated to firebase calls
      this.props.firebase.users().get()
        .then( snapshot => {
          console.log('snapshot in userslist: ', snapshot);
          // const usersObject = snapshot.data();
          // console.log('firebase usersList users snapshot.data(): ', usersObject)

          const usersList = snapshot.docs.map(doc => doc.data());

          // const usersList = Object.keys(usersObject).map(key => ({
          //   ...usersObject[key],
          //   uid: key,
          // }));

          this.setState({
            users: usersList,
            loading: false,
          })
        })
    }
  };

  componentDidMount() {
    this.firebaseInit();
  }

  componentDidUpdate() {
    this.firebaseInit();
  }

  // TODO firbase equivalent for unmounting
  // componentWillUnmount() {
  //   this.props.firebase.users().off();
  // }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h2>Users</h2>
        {loading && <div>Loading ...</div>}

        <ul>
          {users.map(user => (
            <li key={user.uid}>
              <span>
                <strong>ID:</strong> {user.uid}
              </span>
              <span>
                <strong>E-Mail:</strong> {user.email}
              </span>
              <span>
                <strong>Username:</strong> {user.username}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withFirebase(UserList);
