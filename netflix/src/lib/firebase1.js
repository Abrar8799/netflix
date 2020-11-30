import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {

    apiKey: "AIzaSyAGgqpUEejB-9EXbtv27pc1Iwt3xii-Cpk",
    authDomain: "my-project123-1515209237084.firebaseapp.com",
    databaseURL: "https://my-project123-1515209237084.firebaseio.com",
    projectId: "my-project123-1515209237084",
    storageBucket: "my-project123-1515209237084.appspot.com",
    messagingSenderId: "58404144002",
    appId: "1:58404144002:web:bf1b188dd7717e0f6b059b"
    
};

const firebase = Firebase.initializeApp(config);

export { firebase };

