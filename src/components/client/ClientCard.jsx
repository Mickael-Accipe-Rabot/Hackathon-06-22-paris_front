import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./clientCard.css"

const ClientCard = () => {
    const [clientCardInfo, setClientCardInfo] = useState([]);

  useEffect(() => {
      axios
        .get('??')
        .then((res) => res.data)
        .then((data) => setClientCardInfo(data));
    }, []);

  return (
    <div className='ClientCard'>
{clientCardInfo &&
        clientCardInfo.map((client) => (
     <div className='ClientCardContent'>
        <h4>Client</h4>
        <p>{client.clientName}</p>
        <h4>Location</h4>
        <p>{client.location}</p>
        <h4>Sector</h4>
        <p>{client.sector}</p> 
      </div>
    ))}
    </div>
  )
}

export default ClientCard