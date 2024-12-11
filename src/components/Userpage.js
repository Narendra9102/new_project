import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Userpage.css'; 

export default function Userpage() {
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('uname');
    localStorage.removeItem('email');
    localStorage.removeItem('phone_no');

    navigate('/login');
  };

  const handleCreateProject = () => {
    console.log("Create Project clicked");
  };

  return (
    <div className="userpage">

      <h1>Welcome, {localStorage.getItem('uname')}</h1>
      <p>Email: {localStorage.getItem('email')}</p>
      <p>Phone Number: {localStorage.getItem('phone_no')}</p>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>

      <button onClick={handleCreateProject} className="create-project-btn">
        +
        <span className="create-project-text">Create Project</span>
      </button>

    </div>
  );
}
