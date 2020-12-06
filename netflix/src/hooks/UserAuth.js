import {useEffect , useState, useContext} from 'react';
import { ContextFirebase } from '../context/firebaseContext';

function UserAuthenticate () {
    const [ user , setUser ] = useState(
            JSON.parse(localStorage.getItem('authUser'))
    );

    const {firebase} =useContext(ContextFirebase);
    useEffect(()=>{
        const listener=firebase.auth().onAuthStateChanged((authUser)=>{
           
            if(authUser)
            {
                localStorage.setItem('authUser',JSON.stringify(authUser));
                setUser(authUser);
            }
            else {localStorage.removeItem('authItem');
                    setUser(null);
        }
        });
            return () => listener();
    },[])
    return  {user}
}

export default UserAuthenticate;