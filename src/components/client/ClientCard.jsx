import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./clientCard.css"
import { Link } from 'react-router-dom';

const ClientCard = ({ client }) => {

  return (
    <Link to={`/client-details/${client.id}`} style={{ textDecoration: 'none' , color: "black"}}>
    <div className='ClientCard'>
          <div>
     <div className='ClientCardContent'>
        <p className='clientCard-name'>{client.name}</p>
        <p className='clientCard-city'>{client.city}</p>
        <p className='clientCard-category'>{client.category_id}</p> 
      </div>

      </div>
    </div>
    </Link>
  )
}

export default ClientCard