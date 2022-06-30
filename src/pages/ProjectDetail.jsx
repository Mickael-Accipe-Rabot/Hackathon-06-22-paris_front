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
    }, [projectID]);

console.log(projectInfo);
  return (

    <div className='page projectDetails-container'>
      <Link to="/home">
      <p className='projectDetails-link'> Back to projects </p> 
      </Link>
    {projectInfo &&
    <div>

        <div className='projectDetails-head'> 
    <h1 className='projectDetails-name'>{projectInfo.name}</h1>
    <ShowInterest />
        </div>

                          <div className='projectDetailsInfo'>
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
                                <td>{projectInfo.client_id}</td>
                                <td>{projectInfo.start_date}</td>
                                <td>{projectInfo.end_date}</td>
                                <td>React-PHP</td>
                                <td>{projectInfo.priority}</td>
                                <td>{projectInfo.status_id}</td>
                              </tbody>
                            </table>
                          </div>

                            <div className='projectDetails-content'> 
                            <div className='projectDetailsDesc'>
                              <h4>Description</h4>
                              <p className='projectDetails-desc'>{projectInfo.description}</p>
                            </div>
    
  
                              <div className='projectDetails-stackholders'>
                                <h4>Collaborators</h4>
                              <EmployeeList/>
                              </div>
                              </div> 
    
   </div>
}
    </div>
    )}

export default ProjectDetails