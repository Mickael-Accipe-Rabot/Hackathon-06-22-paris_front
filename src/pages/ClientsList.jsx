import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./clientsList.css"
import ClientDetails from './ClientDetails'

const ClientsList = () => {
  const [clientInfo, setClientInfo] = useState([]);

  useEffect(() => {
      axios
        .get('??')
        .then((res) => res.data)
        .then((data) => setClientInfo(data));
    }, []);
  return (
    <div className='page clientsList-container'>
        <div>
        {clientInfo &&
        clientInfo.map((client) => (
            <div className="clientCard">
            <ClientDetails client={client}/>
            </div>
        ))}
        </div>  
    </div>
  )
}

export default ClientsList