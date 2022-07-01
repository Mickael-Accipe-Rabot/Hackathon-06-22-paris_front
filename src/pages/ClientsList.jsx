import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './clientsList.css';
import ClientCard from '../components/client/ClientCard';
import CreateClient from '../components/buttons/CreateClient';
import Navbar from '../components/nav/Navbar';

const ClientsList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/clients')
      .then((res) => res.data)
      .then((data) => setClients(data));
  }, []);

  return (
    <div className="page clientsList-container">
      <Navbar />
      <div className="clientCard">
        <h2 className='clients-list-title'>Clients List</h2>
        <div className="ClientCard-title">
          <h4 className="clientList-name">Client</h4>
          <h4 className="clientList-location">Location</h4>
          <h4 className="clientList-sector">Sector</h4>
        </div>
          <CreateClient />

        {clients && clients.map((client) => <ClientCard client={client} />)}
      </div>
     
    </div>
  );
};

export default ClientsList;
