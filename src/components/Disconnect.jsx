import React from 'react';
import { useEffect } from 'react';
import { useUser } from '../context/UserProvider';

const Disconnect = () => {
  const { setUser } = useUser();

  useEffect(() => {
    setUser(null)
  }, [])

  return true;
}

export default Disconnect