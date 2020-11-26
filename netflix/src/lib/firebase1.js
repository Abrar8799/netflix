import Firebase from './firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={};
const firebase = Firebase.initializingApp(config);

export { firebase } ;

