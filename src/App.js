import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Userpage from './components/Userpage';
import ForgotPassword from './components/ForgotPassword';


export default class App extends Component {
  render() {
    return (
      <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user" element={<Userpage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
      </div>
    )
  }
}
