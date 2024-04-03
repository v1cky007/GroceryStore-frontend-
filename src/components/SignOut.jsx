import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignOut.css';

const SignOut = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSignOut = () => {
    setShowConfirmation(true);
  };

  const confirmSignOut = () => {
    navigate('/admin-login');
    setShowSuccessPopup(true);
  };

  const NOSignOut = () => {
    cancelSignOut();
    navigate('/dashboard');
  };

  const cancelSignOut = () => {
    setShowConfirmation(false);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="Ccontainer">
      <button onClick={handleSignOut}>
        Sign Out
      </button>

      {showConfirmation && (
        <div>
          <p>Are you sure you want to sign out?</p>
          <div className="Sbutton-container">
            <button className="Sbuttton" onClick={confirmSignOut}>Yes</button>
            <button className="Sbuttton cancel" onClick={NOSignOut}>No</button>
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <div className="success-popup">
          <p>Successfully logged out!</p>
          <button onClick={closeSuccessPopup}>OK</button>
        </div>
      )}
    </div>
  );
};

export default SignOut;
