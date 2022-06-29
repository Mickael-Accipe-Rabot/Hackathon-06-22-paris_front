import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
const Home = () => {

const [project,setProject]= useState([])

    useEffect(() => {
        axios
          .get('http://localhost:8000/api/project')
          .then((res) => res.data)
          .then((data) => setProject(data));
      }, []);
    

  return (
    <div className='page home-container'>
        <h1>Projets</h1>
    </div>
  )
  
}

export default Home