import React, { Component } from 'react';

import { withFirebase } from '../../Firebase';

class ProjectsList extends Component {
  _initFirebase = false;

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      projects: [],
      projectName: '',
      projectType: ''
    };
  }

  addProject = (e) => {
      e.preventDefault();
      console.log('submitted add project')

      const projectName = this.state.projectName;
      const projectType = this.state.projectType;

      this.props.firebase.db.collection('projects').add({
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

  onChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
    })
  }

  firebaseInit = () => {
    if (this.props.firebase && !this._initFirebase) {
      this._initFirebase = true;

      this.setState({ loading: true });
      console.log('props firebase in projectslist', this.props.firebase);

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
    //   this.props.firebase.projects().get()
    //     .then( snapshot => {
    //       console.log('snapshot in projectList: ', snapshot);

      this.props.firebase.projects().onShapshot((docs) => {
          docsList = []
          docs.forEach(doc => {
              docsList.push(doc.data.projectName)
          })
        console.log('current data', docsList);
        projectsList = docsList;

        this.setState({
            projects: docsList,
            loading: false,
          })

      })
          // const usersObject = snapshot.data();
          // console.log('firebase usersList users snapshot.data(): ', usersObject)

          //const projectsList = snapshot.docs.map(doc => doc.data());

          // const usersList = Object.keys(usersObject).map(key => ({
          //   ...usersObject[key],
          //   uid: key,
          // }));

      
        // })
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

        <form onSubmit={this.addProject}>
            <label>
                Project Name
                <input type='text' name='projectName' value={this.state.projectName} onChange={this.onChange}/>
            </label>
            <label>
                Project Type
                <input type='text' name='projectType' value={this.state.projectType} onChange={this.onChange}/>
            </label>
            <button type="submit">add Project</button>
        </form>
          <ul>
          {projects.map(project => (
            <li >
              <span>
                <strong>PROJECT name:</strong> {project.projectName}
              </span>
                <span>
                <strong>project type:</strong> {project.projectType}
              </span>
            </li>
          ))}
        </ul> 
      </div>
    );
  }
}

export default withFirebase(ProjectsList);
