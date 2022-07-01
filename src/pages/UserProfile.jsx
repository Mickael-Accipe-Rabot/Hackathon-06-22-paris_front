import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/nav/Navbar';
import './userProfile.css';
import UserProvider from '../context/UserProvider';
import { useUser } from '../contexts/UserProvider';

const UserProfile = () => {

  const { user } = useUser();
  const [userActive, setUserActive] = useState();
  

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/employees/${user.id}`)
      .then((res) => res.data)
      .then((data) => setUserActive(data))
  }, [user.id]);


  return (
    <div className="page userProfile-container">
      <Navbar/>
      {userActive && (
        <>
        <h2 className="home-title">Welcome {`${userActive.firstname} ${userActive.lastname}`}</h2>

      <div className='projectDetails-content'> 
        <div className='projectDetailsDesc'>
          <div  className='projectDetailsDesc2'>
            <h4 className='projectDetails-desc'>company seniority</h4>
            <p>2019 10 june</p>
          </div>
          <div  className='projectDetailsDesc2'>
            <h4 className='projectDetails-desc'>email</h4>
            <p>{userActive.email}</p>
          </div>
          <div  className='projectDetailsDesc2'>
            <h4 className='projectDetails-desc'>city</h4>
            <p>{userActive.city}</p>
          </div>
          <div  className='projectDetailsDesc2'>
            <h4 className='projectDetails-desc'>country</h4>
            <p>{userActive.country}</p>
          </div>
        </div>

        <div className='projectDetails-stackholders'>
          <h4 className='projectDetails-title'>My projects</h4>
          <div  className='projectDetailsDesc2'>
            <h4 className='projectDetails-desc'>Page One Shop</h4>
            <p>Marcel industry</p>
          </div>
          <div  className='projectDetailsDesc2'>
            <h4 className='projectDetails-desc'>Shoplist</h4>
            <p>Carrefour</p>
          </div>
          <div  className='projectDetailsDesc2'>
            <h4 className='projectDetails-desc'>Gusto Mobile</h4>
            <p>Valeo</p>
          </div>
        </div>
        </div> 
        </>
          )}
    </div>

  );
};

export default UserProfile;
