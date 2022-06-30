import React from 'react'
import './clientDetails.css'

const ClientDetails = ({ client }) => {
  return (
    <div className='page clientDetails-container'>
<h3>{client.firstName}</h3>
<h3>{client.lastName}</h3>
    </div>
  )
}

export default ClientDetails