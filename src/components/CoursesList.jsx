import React from 'react';
import './coursesList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/courses-list')
      .then((res) => res.data)
      .then((data) => setCourses(data));
  }, []);



  return (
    <div className='coursesList-container'>
      CoursesList
      {courses &&
        courses.map((course, index) => (
         
           
            <CourseCard key={index} course={course}/>
        
        ))}
    </div>
  );
};

export default CoursesList;
