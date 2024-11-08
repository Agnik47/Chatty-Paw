import React from 'react'
import "./Chat.css"
import Lsidebar from '../../components/LeftSidebar/Lsidebar'
import Chatbox from '../../components/Chatbox/Chatbox'
import Rsidebar from '../../components/RightSidebar/Rsidebar'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chat-Container">
            <Lsidebar/>
            <Chatbox/>
            <Rsidebar/>
        </div>
    </div>
  )
}

export default Chat