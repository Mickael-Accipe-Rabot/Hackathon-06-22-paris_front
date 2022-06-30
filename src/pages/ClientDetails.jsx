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
        .get('??')
        .then((res) => res.data)
        .then((data) => setClientInfo(data));
    }, []);

  return (
    <div className='page clientDetails-container'>
      <Link to="/clientslist">
      <p> Back to clients </p> 
      </Link>
      {clientInfo &&
        clientInfo.map((client) => (
      <div className='client-content'>
      <div className='client-personalInfo'>
        <p>{client.name}</p>
        <p>{client.city}</p>
        <p>{client.mail}</p>
        <p>{client.phone}</p>
        </div>

      <div className='client-description'>
        <h2>Description</h2>
        <p>Texte</p>
      </div>

      <div className='client-project'>
        <h2>Projects</h2>
        <ClientProjectCard />
        <ClientProjectCard />
        <ClientProjectCard />
      </div>
      </div>
))}
    </div>
  )
}

export default ClientDetails