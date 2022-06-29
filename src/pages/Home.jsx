import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import ProjectsList from '../components/ProjectsList'
import CreateProjectButton from '../components/createProjectButton/CreateProjectButton'
const Home = () => {


  const user = {
    isAdmin:true
  }
  

  return (
    <div className='page home-container'>
        <h1>Projets</h1>

       <ProjectsList/>
       <CreateProjectButton user={user}/>
    </div>
  )
  
}

export default Home