import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './projectDetails.css'
import EmployeeList from '../components/employee/EmployeeList'
import ShowInterest from '../components/buttons/ShowInterest'

const ProjectDetails = () => {
  const [projectInfo, setProjectInfo] = useState([]);

  useEffect(() => {
      axios
        .get('??')
        .then((res) => res.data)
        .then((data) => setProjectInfo(data));
    }, []);

  return (

    <div className='page projectDetails-container'>
      <Link to="/home">
      <p> Back to projects </p> 
      </Link>
    {projectInfo &&
        projectInfo.map((project) => (
          <div>
    <h1>{project.name}</h1>
    <ShowInterest />
     <div className='projectInfo'>
        <h4>Client</h4>
        <p>{project.clientName}</p>
        <h4>Date Created</h4>
        <p>{project.date}</p>
        <h4>Deadline</h4>
        <p>{project.duration}</p>
        <h4>Stack</h4>
        <p>{project.stack}</p>
        <h4>Priority</h4>
        <p>{project.priority}</p>
        <h4>Status</h4>
        <p>{project.status}</p> 
      </div>
      
      <div className='projectDesc'>
        <h4>Description</h4>
        <p>{project.description}</p>
      </div>
          
    </div>
    ))}
     <EmployeeList/>
    </div>
   
    )}

export default ProjectDetails