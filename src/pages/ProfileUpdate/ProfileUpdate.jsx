import React, { useContext, useEffect, useState } from "react";
import "./ProfileUpdate.css";
import assets from "../../assets/assets";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Appcontext } from "../../context/AppContext";

const ProfileUpdate = () => {
  document.title = "Chatty Paws - Profile";

  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [prevImage, setPrevImage] = useState(""); // To store previous image (avatar)
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [uid, setUid] = useState("");


  const { setUserData }  = useContext(Appcontext)

  const profileUpdate = async (event) => {
    event.preventDefault();
    try {
      // Reference to the user document in Firestore
      const docRef = doc(db, "users", uid);

      // Only update name and bio (no image upload for now)
      await updateDoc(docRef, {
        bio: bio,
        name: name,
      });
      toast.success("Profile updated successfully!");
      const snap = await getDoc(docRef);
      setUserData(snap.data());
      navigate("/chat")
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setName(userData.name || "");
          setBio(userData.bio || "");
          setPrevImage(userData.avatar || assets.avatar_icon); // Default avatar if none exists
        } else {
          toast.error("No user data found.");
        }
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="profile">
      <div className="prof-con">
        <form onSubmit={profileUpdate}>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={image ? URL.createObjectURL(image) : prevImage || assets.avatar_icon} // Default to prev image or avatar icon
              alt="Profile Avatar"
            />
            Upload Profile Image
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Your Name"
            required
          />
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Write Profile bio..."
            required
          ></textarea>
          <button>Submit</button>
        </form>

        <img
          // src={image ? URL.createObjectURL(image) : prevImage? prevImage :  assets.logo_icon} // Display selected image or logo
          src={image ? URL.createObjectURL(image): assets.pic3}
          className="prof-pic"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
