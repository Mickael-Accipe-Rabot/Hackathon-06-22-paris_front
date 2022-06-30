import React from 'react';
import "./clientsList.css";
import ClientCard from '../components/client/ClientCard';

const ClientsList = () => {

  return (
    <div className='page clientsList-container'>
      Hello
        <div className='clientCard'>
          <clientCard/>
          <clientCard/>
          <clientCard/>
          <clientCard/>
          <clientCard/>
          <clientCard/>
        </div>  
    </div>
  )
}

export default ClientsList