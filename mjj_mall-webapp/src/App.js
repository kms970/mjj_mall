import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/index';
import Login from './login/Login';
import Join from './login/Join';
import JoinConsumer from './login/join/joinConsumer';
import JoinProvider from './login/join/joinProvider';
function App() {
  return (
   <div>
     <Routes>
       <Route path="/" element={<Dashboard/>}>
       </Route>
       <Route path="/login" element={<Login/>} />
       <Route path="/join" element={<Join/>} />
       <Route path="/join/consumer" element={<JoinConsumer />} />
       <Route path="/join/provider" element={<JoinProvider />} />
     </Routes>
   </div>
  );
}

export default App;
