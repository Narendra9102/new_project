import React from 'react';
import { Link } from 'react-router-dom';  
import './Home.css';

export default function Home() {
  return (
    <div >
      <div>
        <h2>Welcome to Digital Storefront</h2>

        <div className='auth-buttons'>
          <Link to="/login" className="auth-link">
            <button className='auth-button'>Login</button>
          </Link>
          <Link to="/registration" className="auth-link">
            <button className='auth-button'>Register</button>
          </Link>
        </div>

      </div>
    </div>
  );
}
