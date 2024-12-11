import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './RegistrationForm.css'; 

function RegistrationForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    

    async function save(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        try {
            await axios.post("http://127.0.0.1:8000/api/registration/", {
                FirstName: firstName,
                LastName: lastName,
                mobileNumber: mobileNumber,
                emailId: emailId,
                password: password,
            });
            setRegistrationSuccess(true);
            setFirstName("");
            setLastName("");
            setMobileNumber("");
            setEmailId("");
            setPassword("");
            setConfirmPassword("");
            setErrorMessage(""); 
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="registration-form-container">
            <div className="form-content">
                <h2>Create An Account</h2>
                {registrationSuccess && <p className="Logs">Registration success</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
                <form className="form" onSubmit={save}>
                    <label>First Name</label>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label>Last Name</label>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label>Mobile Number</label>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Enter Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        className="input-field"
                        placeholder="Enter Email"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="submit-btn">Register</button>

                    <br /><br />

                    <p className="login-redirect">
                        Already have an account? <Link to='/login' className="login-link">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
