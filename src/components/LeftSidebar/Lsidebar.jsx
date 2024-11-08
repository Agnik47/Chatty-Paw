import React from 'react'
import "./Lsidebar.css"
import assets from '../../assets/assets'
const Lsidebar = () => {
  return (
    <div className='ls'>
            <div className="ls-top">
                <div className="ls-nav">
                    <img src={assets.logo} alt="" className='logo' />
                    <div className="menu">
                        <img src={assets.menu_icon} alt="" />
                    </div>
                </div>

                <div className="ls-search">
                    <img src={assets.search_icon} alt="" className='logo'/>
                    <input type="text" placeholder='search here'/>
                </div>
            </div>

            <div className="ls-list">
              {Array(20).fill("").map((item,i)=> (
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
  )
}

export default Lsidebar