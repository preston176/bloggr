// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwfUXFPpEvCjqQGEiZu0NkObiqAkeNgfs",
    authDomain: "bloggr-blogging-react-app.firebaseapp.com",
    projectId: "bloggr-blogging-react-app",
    storageBucket: "bloggr-blogging-react-app.appspot.com",
    messagingSenderId: "234627306045",
    appId: "1:234627306045:web:89622f83bddb324b249054",
    measurementId: "G-5WV4F8KLPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
