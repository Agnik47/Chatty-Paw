import React from 'react'
import "./Chatbox.css"
import assets from '../../assets/assets'

const Chatbox = () => {
  return (
    <div className='cb'>
        <div className="c-user">
            <img src={assets.profile_img} alt="" />
            <p>D Shanmukha <img src={assets.green_dot} alt="" className='g-dot' /></p>
            <img src={assets.help_icon} alt="" />
        </div>


        <div className="c-message">
            <div className="send-msg">
                <p className="msg">Lorem ipsum dolor sit amet.</p>
                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>
            <div className="send-msg">
                <img className='msg-img' src={assets.pic1} alt="" />
                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>
            <div className="our-msg">
                <p className="msg">Lorem ipsum dolor sit amet.</p>
                <div>
                    <img src={assets.profile_img} alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>
        </div>
        <div className="c-input">
            <input type="text" placeholder='Send a Message' />
            <input type="file" name="" id="image"  accept='image/png, image/jpeg' hidden/>
            <label htmlFor="image">
                <img src={assets.gallery_icon} alt="" />
            </label>
            <img src={assets.send_button} alt="" />
        </div>
    </div>
  )

}

export default Chatbox