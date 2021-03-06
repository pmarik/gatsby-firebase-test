
const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
};


class Firebase {
  constructor(app) {
    app.initializeApp(config);

    /* Helper */

    // TODO figure out what ServerValue does for real time db and similar method for firestore
    //this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    // this.db = app.database();
    this.db = app.firestore();

    /* Social Sign In Method Provider */
    // this.googleProvider = new app.auth.GoogleAuthProvider();
    // this.facebookProvider = new app.auth.FacebookAuthProvider();
    // this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***


  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // doSignInWithGoogle = () =>
  //   this.auth.signInWithPopup(this.googleProvider);

  // doSignInWithFacebook = () =>
  //   this.auth.signInWithPopup(this.facebookProvider);

  // doSignInWithTwitter = () =>
  //   this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    // TODO updated email verify method...
    /*
          this.auth.currentUser.sendSignInLinkToEmail({  // look into this, seems more secure...
  
    this.auth.currentUser.sendEmailVerification({
      url: process.env.GATSBY_CONFIRMATION_EMAIL_REDIRECT,
    })
    */
    this.auth.currentUser.sendEmailVerification()
      .then(() => {
        console.log('email verification sent...')
      })
      .catch(err => console.log('email verification failed to send: ', err));

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          // TODO updated .once('value') to .get() firestore equivalent
          .get()
          .then(snapshot => {
            // TODO updated .val() to .data() firestore equivalent
            const dbUser = snapshot.data();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  // user = uid => this.db.ref(`users/${uid}`);
  user = uid => this.db.doc(`users/${uid}`);

  // users = () => this.db.ref('users');
  users = () => this.db.collection('users');

  // *** Message API ***

  projects = () => this.db.collection('projects')

  // message = uid => this.db.doc(`messages/${uid}`);

  // messages = () => this.db.doc('messages');
}

let firebase;

function getFirebase(app, auth, database) {
  if (!firebase) {
    firebase = new Firebase(app, auth, database);
  }

  return firebase;
}

export default getFirebase;
