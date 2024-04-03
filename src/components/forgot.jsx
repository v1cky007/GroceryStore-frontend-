// Forgot.js

import React from "react";
import { Link } from "react-router-dom";
import './forgot.css'
import password_icon from './Assets/password.png';
import Navbar from "./navbar";
import Footer from "./Footer";
const Forgot = () => {
    const handleCreatePassword = () => {
        alert("Successfully created a new password");
    };

    return (
    <div>
    <Navbar/>
        <div className="Forgetcontainer">
            <div className="Forgetheader">
                <div className="Forgettext">Forgot Password</div>
                <div className="underline"></div>
            </div>
            <div className="Forgetinputs">
                <div className="Forgetinput">
                <img src={password_icon} alt="" />
                    <input type="Forgetpassword" placeholder="Enter your New Password" />
                </div>
                <div className="Forgetinput">
                <img src={password_icon} alt="" />
                    <input type="Forgetpassword" placeholder="Enter your New Password again" />
                </div>
                <div className="Forgetsubmit-container">
                    <Link to="/">
                        <div className="Forgetsubmit" onClick={handleCreatePassword}>Create New Password</div>
                    </Link>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Forgot;
