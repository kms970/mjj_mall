import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from './dashboard/index';
import Login from './login/Login';
import Join from './login/Join';
import JoinConsumer from './login/join/joinConsumer';
import JoinProvider from './login/join/joinProvider';
import JoinComplete from "./login/join/JoinComplete";
import Header from "./common/header";
import OrderConfirmation from "./orderConfirmation/orderConfirmation";
import ItemRegistration from "./provider/item/itemRegistration";
import TestFunction from './test/test';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Dashboard/>}/>
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/join" element={<Join/>} />
          <Route path="/join/consumer" element={<JoinConsumer />} />
          <Route path="/join/provider" element={<JoinProvider />} />
          <Route path="/join/complete" element={<JoinComplete />} />
          <Route path="/order/confirmation" element={<OrderConfirmation />} />
          <Route path="/provider/item/Registration" element={<ItemRegistration/>}/>
          <Route path="/test/test" element={<TestFunction/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
