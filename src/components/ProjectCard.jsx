import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './projectCard.css';
const ProjectCard = ({ project, color }) => {

const [isActiv, setIsActiv]=useState(true);

  return (
    <div className="projectCard-container">
      {/* <Link to={`/project-detail${project.id}`}> */}
      {/* <div
        className=""
        //   style={{ backgroundColor: color }}
      > */}
        {/* <h3>{project.name}</h3> */}
        {/* <h3>{project.enterprise}</h3> */}
        <div className="project-title">
       
          <h3 className='project-name'>
          <img
              src="https://randomwordgenerator.com/img/picture-generator/57e1d1444252af14f1dc8460962e33791c3ad6e04e5074417c2f73d59f49c5_640.jpg"
              alt="#"
              className="project-img"
            />
            Project
          </h3>
          <p className={isActiv ? 'status-tag':"status-tag-over" }>status</p>
        </div>

        <div className="client-infos">
          <p className='client-name'>Client name</p>
          <p className='client-date'>Start date</p>
          <p className='client-start'>Timing</p>
        </div>

        <div className="stacks-container">
          <p className="stack-tag">Stacks</p>
          <p className="stack-tag">Stacks</p>
          <p className="stack-tag">Stacks</p>
        </div>
      {/* </div> */}
      {/* </Link> */}
    </div>
  );
};

export default ProjectCard;
