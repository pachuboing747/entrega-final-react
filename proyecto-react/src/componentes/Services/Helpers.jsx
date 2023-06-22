import articulos from "../../componentes/lista/Lista";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-9by7yNXywkgv2R3enut8uqfRxTllgpk",
    authDomain: "proyecto-final-react-78de4.firebaseapp.com",
    projectId: "proyecto-final-react-78de4",
    storageBucket: "proyecto-final-react-78de4.appspot.com",
    messagingSenderId: "925850015250",
    appId: "1:925850015250:web:defc837367951659f56acb"
};
      
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
console.log(db)

export async function exportData(){
    const productsCollectionRef = collection (db, "productos");
    
    for(let item of articulos){
        item.index = item.id;
        delete item.id;
        const respuesta = await addDoc(productsCollectionRef, item)
        console.log("documento creado:", respuesta.id)
    }
}