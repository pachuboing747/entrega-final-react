import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, query, orderBy , addDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD-9by7yNXywkgv2R3enut8uqfRxTllgpk",
  authDomain: "proyecto-final-react-78de4.firebaseapp.com",
  projectId: "proyecto-final-react-78de4",
  storageBucket: "proyecto-final-react-78de4.appspot.com",
  messagingSenderId: "925850015250",
  appId: "1:925850015250:web:defc837367951659f56acb"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export async function requestData() {
  const productsCollectionRef = collection(db, "productos");

  const q = query(productsCollectionRef, orderBy("index")) 
  const productsSnap = await getDocs(q);
  const arrayDocs = productsSnap.docs;

  const dataDocs = arrayDocs.map((doc)=>{
    return{...doc.data(), id: doc.id};
  });

  console.log(dataDocs);
  return dataDocs;

}

async function getProduct(productId) {
  const productDocRef = doc(db, "productos", productId);
  const productSnap = await getDoc(productDocRef);

  if (productSnap.exists()) {
    return { ...productSnap.data(), id: productSnap.id };
  } else {
    console.log("No such document!");
    return null;
  }
}

async function getCategoryData(categoryId) {
  const categoryDocRef = doc(db, "categorias", categoryId);
  const categorySnap = await getDoc(categoryDocRef);

  if (categorySnap.exists()) {
    console.log("Document data:", categorySnap.data());
    return categorySnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
}

export { getProduct, getCategoryData };
export { db };


export async function crearOrden(data){
  const orderCollectionRef = collection(db, "ordenes");
  const respuesta = await addDoc(orderCollectionRef, data);
  return respuesta.id
}



