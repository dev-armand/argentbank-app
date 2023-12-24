import Header from "../../components/header/header-sign-out";
import Footer from "../../components/footer/footer";
import './user.css'

import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editUserName, getUserProfile } from "../../components/login-form/userActions";
import { Navigate } from "react-router-dom";

function User() {
  
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  const [newUserName, setNewUserName] = useState(userProfile.userName);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
      dispatch(getUserProfile());
  }, [dispatch]);

  if (!token) {
    return <Navigate to="/SignIn" />;
  }

  const handleEditSave = async () => {
    if (!userProfile) {
      return;
    }
    await dispatch(editUserName(newUserName));
    await dispatch(getUserProfile());
    setNewUserName("");
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
        <h1>Welcome back<br /><span id="fullName">{userProfile.userName} !</span></h1>
        <button className="edit-button" id="edit-button" type="button" onClick={handleEdit}>Edit Name</button>
        
        <div id="edit-section">
                <form name="edit">
                    <div className="profil-input-wrapper">
                        <label htmlFor="userName">User name:</label>
                        <input
                            type="text"
                            id="userName"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                            placeholder={userProfile.userName}
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