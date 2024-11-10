import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDaolxfAQsC9TAZ50vnvgDAN_kXiW7BX-4",
  authDomain: "chatty-paws.firebaseapp.com",
  projectId: "chatty-paws",
  storageBucket: "chatty-paws.firebasestorage.app",
  messagingSenderId: "742363380986",
  appId: "1:742363380986:web:5d7b62ca2258216782dd43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, There I'm using Chatty-Paw",
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });

    console.log("Document successfully written!");
    toast.success("Account created successfully!");
  } catch (e) {
    toast.error(e.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully!");
  } catch (e) {
    console.error("Error:", e);
    toast.error(e.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.error(e);
    toast.error(e.code.split("/")[1].split("-").join(" "));
  }
};

export { signUp, login , logout ,auth,db};
