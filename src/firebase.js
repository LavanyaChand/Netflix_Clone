import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk0vn33b1PCfH_wf6MtByZMBAub2hhmjs",
  authDomain: "netflix-clone-4749b.firebaseapp.com",
  projectId: "netflix-clone-4749b",
  storageBucket: "netflix-clone-4749b.firebasestorage.app",
  messagingSenderId: "175796593299",
  appId: "1:175796593299:web:b63af344fcedc38af1e366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        } )
    } catch (error) {
        console.log(error.message);
        toast.error(error.code.split('/')[1].split('-').join(" ")); // auth/inavlid-credential to invalid credential message
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error.message);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};