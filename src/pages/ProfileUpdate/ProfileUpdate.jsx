import React, { useState } from "react";
import "./ProfileUpdate.css";
import assets from "../../assets/assets";

const ProfileUpdate = () => {
  document.title = "Chatty Paws - Profile"
  const [image, setImage] = useState(false);
  return (
    <div className="profile">
      <div className="prof-con">
        <form>
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
              src={image ? URL.createObjectURL(image) : assets.avatar_icon}
              alt=""
            />
            Upload Profile Image
          </label>
          <input type="text" placeholder="Your Name" required name="" id="" />
          <textarea placeholder="Write Profile bio..." required></textarea>
          <button>Submit</button>
        </form>

        <img src={image ? URL.createObjectURL(image) : assets.logo_icon} className="prof-pic " alt="" />
      </div>
    </div>
  );
};

export default ProfileUpdate;
