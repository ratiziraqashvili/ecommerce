import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyANB2jUryeQz5HyloppAiACmc434mVTMHY",
    authDomain: "clothes-shop-f6c50.firebaseapp.com",
    projectId: "clothes-shop-f6c50",
    storageBucket: "clothes-shop-f6c50.appspot.com",
    messagingSenderId: "896716050818",
    appId: "1:896716050818:web:6433650bc6fa3034b3ff9b",
    measurementId: "G-48Y4QVW2X2"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export { auth, provider }
  export default db