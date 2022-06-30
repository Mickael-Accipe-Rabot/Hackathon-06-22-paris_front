import React from 'react'
import './clientDetails.css'

const ClientDetails = ({ client }) => {
  return (
    <div className='page clientDetails-container'>
        <h3>{client.name}</h3>
        <h3>{client.city}</h3>
        <h3>{client.sector}</h3>
    </div>
  )
}

export default ClientDetails