import React from 'react';
import './projectsList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/project')
      .then((res) => res.data)
      .then((data) => setProjects(data));
  }, []);



  return (
    <div className='projectsList-container'>
      <ul className='Projects-subMenu'>
        <li className='subMenu-title'>Projects</li>
        <div className="subMenu-infos">
        <li>Clients</li>
        <li>Sart date</li>
        <li>Timing</li>
        </div>
        <li className='subMenu-stacks'>Stacks</li>
        <li className='subMenu-status'>Status</li>
      </ul>
      {/* {projects &&
        projects.map((project, index) => (
          <div key={index}>
            {' '}
            <ProjectCard project={project}/>{' '}
          </div>
        ))} */}
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div>
  );
};

export default ProjectsList;
