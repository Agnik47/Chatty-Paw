import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Chat from './pages/Chats/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import Error from './Loader/Error'

const App = () => {
  return (
    <>

      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/profile" element={<ProfileUpdate/>}/>

          
          <Route path="/*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App