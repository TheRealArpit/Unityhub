// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { apiKey } from "./Keys";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Keys.env.API_KEY,
  authDomain: Keys.env.AUTH_DOMAIN,
  projectId: Keys.env.PROJECT_ID,
  storageBucket: Keys.env.STORAGE_BUCKET,
  messagingSenderId: Keys.env.MESSAGING_SENDER_ID,
  appId: Keys.env.APP_ID,
  measurementId: Keys.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);