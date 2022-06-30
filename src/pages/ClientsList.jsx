import React from 'react';
import "./clientsList.css";
import ClientCard from '../components/client/ClientCard';

const ClientsList = () => {

  return (
    <div className='page clientsList-container'>
        <div className='clientCard'>
        <div className='ClientCard-title'>
      <h4 className='clientList-name'>Client</h4>
      <h4 className='clientList-location'>Location</h4>
      <h4 className='clientList-sector'>Sector</h4>
      </div>
          <div className='clientList-card'><ClientCard/></div>
          <div className='clientList-card'><ClientCard/></div>
          <div className='clientList-card'><ClientCard/></div>
          <div className='clientList-card'><ClientCard/></div>
          <div className='clientList-card'><ClientCard/></div>
          <div className='clientList-card'><ClientCard/></div>
          <div className='clientList-card'><ClientCard/></div>
        </div>  
    </div>
  )
}

export default ClientsList