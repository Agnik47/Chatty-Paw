import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();

const AppcontextProvider = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [chatData, setChatData] = useState(null);

  const loadUserData = async (uid) => {
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      console.log(userData);
      setUserData(userData);

      if (userData.avatar && userData.name) {
        navigate("/chat");
      } else {
        navigate("/profile");
      }
      //For the Last Seen... cause woh matter karta hai
      await updateDoc(userRef, {
        lastSeen: Date.now(),
      });

      setInterval(async () => {
        if (auth.chatUser) {
          await updateDoc(userRef, {
            lastSeen: Date.now(),
          });
        }
      }, 60000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userData) {
      const chatRef = doc(db, "chats", userData.id);
      const unSub = onSnapshot(chatRef, async (res) => {
        const chatItems = res.data().chatsData;

        const tempData = [];
        for (const item of chatItems) {
          const userRef = doc(db, "users", item, rId);
          const userSnap = await getDoc(userRef);
          const userData = userSnap.data();
          //push userData an ChatItems and Strote it in tempData
          tempData.push({ ...item, userData });
        }
        setChatData(tempData.sort((a, b) => b.updatedAt - a.updatedAt)); //it will say which chat is recent?
        //Keep the Recent chat at TOP and Old chat at the bottom
        //Now we will call the unSub
      });
      return () => {
        unSub();
      };
    }
  }, [userData]);

  const value = {
    userData,
    chatData,
    setUserData,
    setChatData,
    loadUserData,
  };

  return (
    <Appcontext.Provider value={value}>{props.children}</Appcontext.Provider>
  );
};

export default AppcontextProvider;
