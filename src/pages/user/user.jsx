import Header from "../../components/header/header-sign-out";
import Footer from "../../components/footer/footer";
import './user.css'

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from './apiData'; 

function User({ dispatch, firstName, lastName }) {

  useEffect(() => {
    dispatch(fetchUserData()); 
  }, [dispatch]);

  const handleEdit = () => {
    document.getElementById("edit-button").style.display = "none";
    document.getElementById("edit-section").style.display = "block";
  }

  const handleEditCancel = () => {
    document.getElementById("edit-button").style.display = "initial";
    document.getElementById("edit-section").style.display = "none";
  }

  const handleEditSave = async () => {
    document.getElementById("edit-button").style.display = "initial";
    document.getElementById("edit-section").style.display = "none";
    
    try {
      const newLastName = document.getElementById("lastNameInput").value;
      const newFirstName = document.getElementById("firstNameInput").value;

      const token = localStorage.getItem('token');
  
      const response = await fetch('http://localhost:3001/api/v1/user', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ lastName: newLastName, firstName: newLastName }),
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid credentials');
        } else {
          throw new Error('Server error');
        }
      }
  
      dispatch(lastName(newLastName));
      dispatch(firstName(newFirstName));
      
  
    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  return (
  <div>
    <Header />
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br /><span id="fullName">{firstName}{lastName}</span></h1>
        <button className="edit-button" id="edit-button" type="button" onClick={handleEdit}>Edit Name</button>
        <div id="edit-section">
                    <form name="edit">
                        <div className="profil-input-wrapper">
                            <input id="firstNameInput" type="text" placeholder={"firstName"}/>
                        </div>
                        <div className="profil-input-wrapper">
                            <input id="lastNameInput" type="text" placeholder={"lastName"}/>
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

export default connect()(User);