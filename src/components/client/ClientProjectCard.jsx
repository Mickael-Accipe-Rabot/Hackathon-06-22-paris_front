import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./clientProjectCard.css"

const ClientProjectCard = () => {
    const [clientProjectInfo, setClientProjectInfo] = useState([]);

  useEffect(() => {
      axios
        .get('http://localhost:8000/api/projects')
        .then((res) => res.data)
        .then((data) => setClientProjectInfo(data));
    }, []);
  return (
    <div className='ClientProjectCard'>

{clientProjectInfo &&
        clientProjectInfo.map((project) => (

     <div className='clientProject-data'>

<table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Date Created</th>
              <th>Deadline</th>
              <th>Stack</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <td>{project.name}</td>
            <td>{project.start_date}</td>
            <td>{project.end_date}</td>
            <td>React-PHP</td>
            <td>{project.priority}</td>
            <td>{project.status_id}</td>
          </tbody>
        </table>     
      </div>
    ))}
  </div>
    )}


export default ClientProjectCard