import React from 'react';
import './projectsList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/projects')
      .then((res) => res.data)
      .then((data) => setProjects(data));
  }, []);

  

  return (
    <div className="projectsList-container">
      <ul className="Projects-subMenu">
        <li className="subMenu-title">Projects</li>
        <div className="subMenu-infos">
          <li>Clients</li>
          <li>Sart date</li>
          <li>End date</li>
        </div>
        <li className="subMenu-stacks">Stacks</li>
        <li className="subMenu-status">Status</li>
      </ul>
      {projects &&
        projects.map((project, index) => <ProjectCard project={project}className={project.secret ? "projectCard-container secret-case":null} />)}

{console.log('SECRET:',projects.secret)}


      {projects.status_id === 1 ? (
        <p className="design-status subMenu-status">Design</p>
      ) : projects.status_id === 2 ? (
        <p className="dev-status subMenu-status">Production</p>
      ) : projects.status_id === 3 ? (
        <p className="test-status subMenu-status">Test</p>
      ) : projects.status_id === 4 ? (
        <p className="deploy-status subMenu-status">Déploiement</p>
      ) : (
        null
      )}

      
    </div>
  );
};

export default ProjectsList;
