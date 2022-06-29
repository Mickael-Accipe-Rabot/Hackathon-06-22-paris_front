import React from 'react';
import './userProfile.css';

const UserProfile = () => {

const user={
  name:'toto',
  lastname:"l'asticot",
  embauche: "22/01/22",
  techno:["Js", "Node","React"],
  city : "Toulouse"
}

  return (
    <div className="page userProfile-container">
      <h1>{user.name}  {user.lastname}</h1>
      <p>date d'embauche : {user.embauche}</p>
      <p>techno : {user.techno}</p>
      <p>Agence : {user.city}</p>
      <p>Projet en cours : {}</p>
      <p>Projets terminés : {}</p>
    </div>
  );
};

export default UserProfile;
