import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDBOCsNnjE64aKZ9nam68mFe5P07FRxLY8",
    authDomain: "twitter-clone-a957a.firebaseapp.com",
    projectId: "twitter-clone-a957a",
    storageBucket: "twitter-clone-a957a.appspot.com",
    messagingSenderId: "112575496501",
    appId: "1:112575496501:web:d4e8270c4ed34ac5544c7c",
    measurementId: "G-5QFFLSNS6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=firebase.firestore();
export default db;