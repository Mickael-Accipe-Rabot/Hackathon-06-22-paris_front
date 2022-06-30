import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import ProjectsList from '../components/ProjectsList';
import UserProvider from '../context/UserProvider';

const Home = () => {
  return (
    <div className="page home-container">
      <h2 className='home-title'>Welcome ...context...</h2>
      
      <ProjectsList />
    </div>
  );
};

export default Home;
