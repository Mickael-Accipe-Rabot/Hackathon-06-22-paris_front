import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './projectDetails.css'
import EmployeeList from '../components/employee/EmployeeList'
import ShowInterest from '../components/buttons/ShowInterest'

const ProjectDetails = () => {
  const [projectInfo, setProjectInfo] = useState([]);
  const { projectID } = useParams();

  useEffect(() => {
      axios
        .get(`http://localhost:8000/api/projects/${projectID}`)
        .then((res) => res.data)
        .then((data) => setProjectInfo(data));
    }, []);
console.log(projectInfo);
  return (

    <div className='page projectDetails-container'>
      <Link to="/home">
      <p className='project-link'> Back to projects </p> 
      </Link>
    {projectInfo &&
        projectInfo.map((project) => (
          <div>
        <div className='project-head'> 
    <h1 className='project-name'>{project.name}</h1>
    <ShowInterest />
        </div>
      <div className='projectInfo'>
        <table>
          <thead>
            <tr>
              <th>Clients</th>
              <th>Date Created</th>
              <th>Deadline</th>
              <th>Stack</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <td>{project.client_id}</td>
            <td>{project.start_date}</td>
            <td>{project.end_date}</td>
            <td>React-PHP</td>
            <td>{project.priority}</td>
            <td>{project.status_id}</td>
          </tbody>
        </table>
      </div>
      
      <div className='projectDesc'>
        <h4>Description</h4>
        <p className='project-desc'>{project.description}</p>
      </div>
          
    </div>
    ))}
     <EmployeeList/>
    </div>
   
    )}

export default ProjectDetails