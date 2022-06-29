import React from 'react';
import { Link } from 'react-router-dom';
import './projectCard.css';
const ProjectCard = ({ project, color }) => {
  return (
    <div className="">
      <Link to={`/project-detail${project.id}`}>
        <div
          className="projectCard-color"
          style={{ backgroundColor: color }}
        >
            <h3>{project.name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
