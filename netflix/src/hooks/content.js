import {useEffect , useState, useContext} from 'react';
import { ContextFirebase } from '../context/firebaseContext.js';


function Datacontent(target) {
   
    const [content , setcontent] = useState([]);
    const {firebase} = useContext(ContextFirebase);
    useEffect(()=> {
        firebase
           .firestore()
           .collection(target)
           .get()
           .then((snapshot)=> {
               const allcontent=snapshot.docs.map((contentObj)=>({
                   ...contentObj.data(),
                   docsId:contentObj.id,
               }))
               setcontent(allcontent);
           })  
        .catch((error)=> {
            console.log(error.message);
        }) 
     },[])
    return {[target]:content}
}

export default Datacontent;
