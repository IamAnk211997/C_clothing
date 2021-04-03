import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAig4HjOTk4JwZ-DKJ6OwWquhtL8SsrnVU",
  authDomain: "cloth-db-crwn.firebaseapp.com",
  projectId: "cloth-db-crwn",
  storageBucket: "cloth-db-crwn.appspot.com",
  messagingSenderId: "14006137710",
  appId: "1:14006137710:web:f950e8b998cd2e7b27077f",
  measurementId: "G-6EG2Y0T2WP"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
