import React from 'react';
import './createProject.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useUser } from '../../contexts/UserProvider';
import axios from 'axios';

const CreateProject = () => {
  //en props la table user fetchée dans App ?
  //objectif, récupérer le booléan isAdmin pour afficher ou non le bouton de création de projet
  const { user } = useUser();
  const [userActive, setUserActive] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/employees/${user.id}`)
      .then((res) => res.data)
      .then((data) => setUserActive(data));
  }, [user.id]);

  return (
    <div>
      {userActive && userActive.isadmin ? (
        <Link to="/project-form">
          <div className="create-btn btn">New project</div>
        </Link>
      ) : null}
    </div>
  );
};

export default CreateProject;
