import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './clientDetails.css'
import ClientProjectCard from "../components/client/ClientProjectCard"

const ClientDetails = ({ client }) => {
  const [clientInfo, setClientInfo] = useState([]);

  useEffect(() => {
      axios
        .get('http://localhost:8000/api/clients{id}')
        .then((res) => res.data)
        .then((data) => setClientInfo(data));
    }, []);

  return (
    <div className='page clientDetails-container'>
      <Link to="/clientslist">
      <p className='project-link'> Back to clients </p> 
      </Link>
      {clientInfo &&
        clientInfo.map((client) => (
      <div className='client-content'>
        <h1 className='client-name'>{client.name}</h1>
      <div className='client-personalInfo'>
        <p>{client.city}</p>
        <p>{client.email}</p>
        </div>

      <div className='client-description'>
        <h2 className='client-title'>Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className='client-project'>
        <h2 className='client-title'>Projects</h2>
       <div className='client-card'> <ClientProjectCard /> </div>
        <ClientProjectCard />
        <ClientProjectCard />
      </div>
      </div>
))}
    </div>
  )
}

export default ClientDetails