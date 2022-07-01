import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './projectCard.css';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const ProjectCard = ({ project, color }) => {
  const start_date = moment(project.start_date).format('MMM Do YY');
  const end_date = moment(project.end_date).format('MMM Do YY');

  var random_boolean_value = Math.random() < 0.5;
  for (var i = 0; i < 10; i++) {
    var rand_number = Math.random();
    console.log(rand_number);
    var random_boolean_value = rand_number < 0.5;
    console.log(random_boolean_value);
  }

  return (
    <Link
      to={`/project-details/${project.id} `}
      className={
        random_boolean_value
          ? 'projectCard-container secret-case'
          : 'projectCard-container'
      }
    >
      <div className="project-card">
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
