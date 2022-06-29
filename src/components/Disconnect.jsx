import React from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserProvider';

const Disconnect = () => {
  const { setUser } = useUser();

  useEffect(() => {
    setUser(null)
  }, [])

  return <Navigate to="/" />
}

export default Disconnect