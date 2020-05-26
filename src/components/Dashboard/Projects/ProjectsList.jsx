import React, { Component } from 'react';

import { withFirebase } from '../../Firebase';

class ProjectsList extends Component {
  _initFirebase = false;

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      projects: [],
    };
  }

  addProject = (projectName, projectType) => {
      this.props.firebase.projects.set({
          projectName,
          projectType,
      })
        .then(() => {
            console.log('project created');
        })
        .catch((error) => {
            console.log('error making project', error);

        })
        
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
      this.props.firebase.projects().get()
        .then( snapshot => {
          console.log('snapshot in projectList: ', snapshot);
          // const usersObject = snapshot.data();
          // console.log('firebase usersList users snapshot.data(): ', usersObject)

          const projectsList = snapshot.docs.map(doc => doc.data());

          // const usersList = Object.keys(usersObject).map(key => ({
          //   ...usersObject[key],
          //   uid: key,
          // }));

          this.setState({
            projects: projectsList,
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
    const { projects, loading } = this.state;

    return (
      <div>
        <h2>Projects list</h2>
        {loading && <div>Loading ...</div>}

        {!(projects.length > 0) && <p>No current projects, please add a project to begin</p>}

        {/* <ul>
          {projects.map(project => (
            <li >
              <span>
                <strong>PROJECT:</strong> {project}
              </span>
              {/* <span>
                <strong>E-Mail:</strong> {user.email}
              </span>
              <span>
                <strong>Username:</strong> {user.username}
              </span> */}
            {/* </li>
          ))}
        </ul> */} 
      </div>
    );
  }
}

export default withFirebase(ProjectsList);
