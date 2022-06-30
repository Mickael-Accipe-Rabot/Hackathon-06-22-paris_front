import React from 'react';
import { Link } from 'react-router-dom';
import './projectCard.css';
const CourseCard = ({ project, color }) => {
    
  return (
    <div className="">
      {/* <Link to={`/project-detail${project.id}`}> */}
        <div
          className="projectCard-container"
        //   style={{ backgroundColor: color }}
        >
            {/* <h3>{project.name}</h3> */}
            {/* <h3>{project.enterprise}</h3> */}
            <h3>name</h3>
            <h3>enterprise</h3>
            <p>Techno : React/Node</p>
            <p>description</p>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default CourseCard;
