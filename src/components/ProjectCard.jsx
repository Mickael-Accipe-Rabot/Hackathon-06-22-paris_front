import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './projectCard.css';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const ProjectCard = ({ project, color }) => {
  
  const start_date = moment(project.start_date).format('MMM Do YY');
  const end_date = moment(project.end_date).format('MMM Do YY');

  //  let { id } = useParams();

  return (
    <Link
      to={`/project-details/${project.id} `}
      className="projectCard-container"
    >
      <div className='project-card'>
        {/* <Link to={`/project-detail${project.id}`}> */}
        {/* <div
        className=""
        //   style={{ backgroundColor: color }}
      > */}
        {/* <h3>{project.name}</h3> */}
        {/* <h3>{project.enterprise}</h3> */}
        <div className="project-title">
          <h3 className="project-name">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/57e1d1444252af14f1dc8460962e33791c3ad6e04e5074417c2f73d59f49c5_640.jpg"
              alt="#"
              className="project-img"
            />
            {project.name}
          </h3>
          </div>
          {/* <p className={isActiv ? 'status-tag':"status-tag-over" }>status</p> */}

          {/* {statusId === 1 ? <p className='design-status subMenu-status'>Design</p>
          : statusId === 2 ? <p className='dev-status subMenu-status'>Production</p>
        :statusId === 3 ? <p className='test-dev subMenu-status'>Test</p>
        :statusId === 4 ? <p className='deploy-status subMenu-status'>Déploiement</p>:
      <p>null</p> } */}
        <div className="client-infos">
          <p className="client-name">{project.name}</p>
          <p className="client-date">{start_date}</p>
          <p className="client-start">{end_date}</p>
        </div>

        <div className="stacks-container">
          <p className="stack-tag">Stacks</p>
          <p className="stack-tag">Stacks</p>
          <p className="stack-tag">Stacks</p>
        </div>
        {/* </div> */}
        {project.status_id === 1 ? (
          <p className="design-status c-status">Design</p>
        ) : project.status_id === 2 ? (
          <p className="dev-status c-status">Production</p>
        ) : project.status_id === 3 ? (
          <p className="test-status c-status">Test</p>
        ) : project.status_id === 4 ? (
          <p className="deploy-status c-status">Déploiement</p>
        ) : null}
      </div>
    </Link>
  );
};

export default ProjectCard;
