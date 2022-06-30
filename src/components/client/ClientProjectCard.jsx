import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./clientProjectCard.css"

const ClientProjectCard = () => {
    const [clientProjectInfo, setClientProjectInfo] = useState([]);

  useEffect(() => {
      axios
        .get('')
        .then((res) => res.data)
        .then((data) => setClientProjectInfo(data));
    }, []);
  return (
    <div className='ClientProjectCard'>

{clientProjectInfo &&
        clientProjectInfo.map((project) => (
     <div className='clientProject-data'>
         <h4>Project</h4>
         <p>{project.name}</p>
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
    ))}
  </div>
    )}


export default ClientProjectCard