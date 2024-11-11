import React, { useContext, useRef } from "react";
import "./Lsidebar.css";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, getDoc, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import { where } from "firebase/firestore/lite";
import { Appcontext } from "../../context/AppContext";
import { getDocs } from "firebase/firestore"; // Change to getDocs for querying documents



const Lsidebar = () => {
  const navigate = useNavigate();

  const { userData } = useContext(Appcontext);


const inputHandler = async (e) => {
  try {
    const input = e.target.value;
    const userRef = collection(db, "users");
    const q = query(userRef, where("username", "==", input.toLowerCase())); // Correctly use userRef here
    const querySnap = await getDocs(q); // Use getDocs instead of getDoc
    
    if (!querySnap.empty && querySnap.docs[0].data().id !== userData.id) {
      console.log(querySnap.docs[0].data());
    }
  } catch (error) {
    console.error(error);
    toast.error("User Not Found");
  }
};

  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} alt="" className="logo" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
            <div className="sub-menu">
              <p onClick={() => navigate("/profile")}>Edit Profile</p>

              <hr />
              <p>Log Out</p>
            </div>
          </div>
        </div>

        <div className="ls-search">
          <img src={assets.search_icon} alt="" className="logo" />
          <input
            onChange={inputHandler}
            type="text"
            placeholder="search here"
          />
        </div>
      </div>

      <div className="ls-list">
        {Array(20)
          .fill("")
          .map((item, i) => (
            <div key={i} className="friends">
              <img src={assets.profile_img} alt="" />
              <div>
                <p>D Shanmukha</p>
                <span>Abe Chal Nandi Hills chalte hai</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Lsidebar;
