import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      setMessage("");
      return;
    }
    try {
    
      const response = await axios.post("http://127.0.0.1:8000/api/reset-password/", { newPassword });
      setMessage(response.data.message || "Password reset successful!");
      setError("");
      setIsPasswordReset(true);
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className='body'>
    <div className="forgot-password-container">
      <h2>Reset Password</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      {!isPasswordReset ? (
        <form onSubmit={handlePasswordReset} className="forgot-password-form">
          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div>
          <p className="redirect-message">Your password has been reset successfully!</p>
          <p className="login-redirect">
            Go back to <Link to='/login' className="login-link">Login</Link>
          </p>
        </div>
      )}
    </div>
    </div>
  );
}

export default ForgotPassword;
