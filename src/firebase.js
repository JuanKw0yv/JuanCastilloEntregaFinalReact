// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd6fQ8L1DFvFcxmLDfJXwyDWDU0kAiGhY",
  authDomain: "final2-35775.firebaseapp.com",
  projectId: "final2-35775",
  storageBucket: "final2-35775.firebasestorage.app",
  messagingSenderId: "450765526750",
  appId: "1:450765526750:web:e74105adddfab79e40944f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getSingleProduct(id) {
    const documentRef = doc(db, "products", id)

    try{
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()) {
            return snapshot.data();
        }else{
            console.log("el documento no existe")
        }
    }catch(error){
        console.error("Error al obtener el documento: ", error);   
    }
}

export async function getProducts(id) {
    try{
        const querySnapshot = await getDocs(collection(db, "products"))
        if (querySnapshot.size !== 0){
            const productsList = querySnapshot.docs.map(docu => {
                return{
                    id: docu.id,
                    ...docu.data()
                }
            })
            return productsList;
        }else{
            console.log("No hay productos en la coleccion.");
            
        }
        
    }catch(error){
        console.error("Error al obtener el documento: ", error);   
    }
}

export async function sendOrder(order) {
    const orderCollection= collection(db, "orders");

    try{
        const docRef = await addDoc(orderCollection, order);
        console.log("Nueva orden generada: "+docRef.id);
        return docRef.id
    }catch(error){
        console.error("Error al obtener el documento: ", error);   
    }
}