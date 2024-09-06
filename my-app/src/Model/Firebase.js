// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//require('dotenv').config({ path: 'Keys.env' });
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const collectionRef = collection(db, "users");

export function getDocuments() {

  return getDocs(collectionRef)
  .then((snapshot) => {
    let users = [];
    snapshot.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id })
      //console.log(doc.data());
    });
    //console.log(users);
    return users;
  })
  .catch((error) => {
    console.error(error);
    return []; // Return an empty array in case of error
  });
}

export default collectionRef;