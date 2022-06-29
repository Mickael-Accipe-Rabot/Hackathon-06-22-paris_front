import React from 'react';
import './createProjectButton.css';
import { Link } from 'react-router-dom';

const CreateProjectButton = ({user}) => {
//en props la table user fetchée dans App ?
//objectif, récupérer le booléan isAdmin pour afficher ou non le bouton de création de projet

  return (
    <div>
      {user.isAdmin ? (
        <Link to='/project-form'>
          <div className="create-btn">+</div>
        </Link>
      ) : null}
    </div>
  );
};

export default CreateProjectButton;
