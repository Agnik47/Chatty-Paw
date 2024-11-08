import React from "react";
import "./Rsidebar.css";
import assets from "../../assets/assets";

const Rsidebar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          D Shanmukha <img src={assets.green_dot} alt="" />
        </h3>
        <p>Hey, Kaise Ho mera Dance dekhlo</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic3} alt="" />
        </div>
      </div>
      <button>Logout</button>
    </div>
  );
};

export default Rsidebar;
