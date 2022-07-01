import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import ProjectsList from '../components/ProjectsList';
import UserProvider from '../context/UserProvider';
import { useUser } from '../contexts/UserProvider';
import CreateProject from '../components/buttons/CreateProject';
import Navbar from '../components/nav/Navbar';

const Home = () => {
  const { user } = useUser();
  const [userActive, setUserActive] = useState();
  

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/employees/${user.id}`)
      .then((res) => res.data)
      .then((data) => setUserActive(data)
      .then(console.log('UUU:',userActive.isadmin)))
  }, [user.id]);

  return (
    <div className="page home-container">
       <Navbar/>
      {userActive && (
        <h2 className="home-title">Welcome {`${userActive.firstname} ${userActive.lastname}`}</h2>
        )}
      <CreateProject />
      <ProjectsList />
    </div>
  );
};

export default Home;
