import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./clientCard.css"

const ClientCard = () => {
    const [clientCardInfo, setClientCardInfo] = useState([]);

  useEffect(() => {
      axios
        .get('http://localhost:8000/api/clients')
        .then((res) => res.data)
        .then((data) => setClientCardInfo(data));
    }, []);

  return (
    <div className='ClientCard'>
{clientCardInfo &&
        clientCardInfo.map((client) => (
          <div>
     <div className='ClientCardContent'>
        <p className='client-name'>{client.name}</p>
        <p className='client-city'>{client.city}</p>
        <p className='client-category'>{client.category_id}</p> 
      </div>

      </div>
    ))}
    </div>
  )
}

export default ClientCard