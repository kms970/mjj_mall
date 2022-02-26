import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/index';
import Login from './login/Login';
import Join from './login/Join';
function App() {
  return (
   <div>
     <Routes>
       <Route path="/" element={<Dashboard/>}>
       </Route>
       <Route path="/login" element={<Login/>} />
       <Route path="Join" element={<Join/>} />
     </Routes>
   </div>
  );
}

export default App;
