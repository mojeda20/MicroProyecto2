import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tus credenciales de configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMZX9ykhI9Z8ecagkhw4FiVTPz3VKpj6U",
  authDomain: "microproyecto-2-e0e6e.firebaseapp.com",
  projectId: "microproyecto-2-e0e6e",
  storageBucket: "microproyecto-2-e0e6e.appspot.com",
  messagingSenderId: "1072451769493",
  appId: "1:1072451769493:web:2edc0b2aa603d2bf3e779c",
  measurementId: "G-Y423W8TJ3N",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar el servicio de autenticación de Firebase
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
