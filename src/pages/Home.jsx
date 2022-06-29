import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import ProjectsList from '../components/ProjectsList'
const Home = () => {


    

  return (
    <div className='page home-container'>
        <h1>Projets</h1>

       <ProjectsList/>
    </div>
  )
  
}

export default Home