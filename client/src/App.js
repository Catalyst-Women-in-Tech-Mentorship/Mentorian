import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import Login from './routes/Login';
import Registration from './routes/Registration';
import ProfilePages from './routes/ProfilePages';

function App() {
  return (
  <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/registration" element={<Registration/>} />
        <Route path="/profilepages" element={<ProfilePages/>} />
    </Routes>
    </>
  );
}

export default App;
