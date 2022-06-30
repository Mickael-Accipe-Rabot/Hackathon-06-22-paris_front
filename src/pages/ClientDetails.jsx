import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import './clientDetails.css'
import ClientProjectCard from "../components/client/ClientProjectCard"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const ClientDetails = ({ client }) => {
  const [clientInfo, setClientInfo] = useState([]);
  const { clientID } = useParams();

  useEffect(() => {
      axios
        .get(`http://localhost:8000/api/clients/${clientID}`)
        .then((res) => res.data)
        .then((data) => setClientInfo(data));
    }, [clientID]);

  return (
    <div className='page clientDetails-container'>
      <Link to="/clientslist">
      <p className='clientDetails-link'> Back to clients </p> 
      </Link>
      {clientInfo &&
      <div className='clientDetails-content'>
        <h1 className='clientDetails-name'>{clientInfo.name}</h1>
      <div className='clientDetails-personalInfo'>
        <p className='clientDetails-personalInfoTitle'><LocationOnIcon style={{ color: "#DB743E" }}/> {clientInfo.city}</p>
        <p className='clientDetails-personalInfoTitle'><EmailIcon style={{ color: "#DB743E" }}/> {clientInfo.email}</p>
        </div>

      <div className='clientDetails-description'>
        <h2 className='clientDetails-title'>Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className='clientDetails-project'>
        <h2 className='clientDetails-title'>Projects</h2>
       <div className='clientDetails-card'> <ClientProjectCard clientID={clientID}/> </div>
      </div>
      </div>
}
    </div>
  )
}

export default ClientDetails