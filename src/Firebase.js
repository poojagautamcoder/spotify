
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBopFbTNZsQbVJS4qNf4gEUZAUEO4tEyUc",
  authDomain: "react-authantication.firebaseapp.com",
  projectId: "react-authantication",
  storageBucket: "react-authantication.appspot.com",
  messagingSenderId: "632409093228",
  appId: "1:632409093228:web:44cf05f01b3c38396b9449",
  measurementId: "G-8XQG531H5N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;