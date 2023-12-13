import Header from "../../components/header/header-sign-out";
import Footer from "../../components/footer/footer";
import './user.css'

import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editUserName, getUserProfile } from "../../components/login-form/userActions";




function User() {
  
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userReducer.userProfile);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  useEffect(() => {
      dispatch(getUserProfile());
  }, [dispatch]);

  const handleEditSave = async () => {
      if (!userProfile) {
          // Handle userProfile not being available yet
          console.log(userProfile,"Cannot access user");
          return;
      }

      const fullName = {
          firstName: newFirstName || userProfile.firstName,
          lastName: newLastName || userProfile.lastName,
      };
      await dispatch(editUserName(fullName));
      await dispatch(getUserProfile());
      setNewFirstName("");
      setNewLastName("");
  };

  const handleEdit = () => {
      document.getElementById("edit-button").style.display = "none";
      document.getElementById("edit-section").style.display = "block";
  }

  const handleEditCancel = () => {
      document.getElementById("edit-button").style.display = "initial";
      document.getElementById("edit-section").style.display = "none";
  }
    
  return (
  <div>
    <Header />
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br /><span id="fullName">{"userFullName"}!</span></h1>
        <button className="edit-button" id="edit-button" type="button" onClick={handleEdit}>Edit Name</button>
        
        <div id="edit-section">
                <form name="edit">
                    <div className="profil-input-wrapper">
                        <label htmlFor="firstName">First name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={newFirstName || userProfile.firstName}
                            onChange={(e) => setNewFirstName(e.target.value)}
                        />
                    </div>
                    <div className="profil-input-wrapper">
                        <label htmlFor="lastName">Last name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={newLastName || userProfile.lastName}
                            onChange={(e) => setNewLastName(e.target.value)}
                        />
                    </div>
                </form>
                <div className="btn-form">
                    <button type="submit" className="save-button" onClick={handleEditSave}>Save</button>
              <button type="button" className="cancel-button" onClick={handleEditCancel}>Cancel</button>
          </div>
        </div>
      </div>

      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  )
}

export default User;

