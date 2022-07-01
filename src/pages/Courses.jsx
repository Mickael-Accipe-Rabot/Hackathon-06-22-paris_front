import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoursesList from '../components/CoursesList';
import CreateCourse from '../components/buttons/CreateCourse';
import Navbar from '../components/nav/Navbar';
import './courses.css'


const Courses = () => {
  return (
    <div className="page courses-container">
      <Navbar/>
      <h1 className='course-title-page'>Courses</h1>
      <CreateCourse />
      <CoursesList />
    </div>
  );
};

export default Courses;
