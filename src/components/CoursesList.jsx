import React from 'react';
import './projectsList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';

const CoursesList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/project')
      .then((res) => res.data)
      .then((data) => setProjects(data));
  }, []);



  return (
    <div className='projectsList-container'>
      CoursesList
      {/* {projects &&
        projects.map((project, index) => (
          <div key={index}>
            {' '}
            <CoursesCard project={project}/>{' '}
          </div>
        ))} */}
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
    </div>
  );
};

export default CoursesList;
