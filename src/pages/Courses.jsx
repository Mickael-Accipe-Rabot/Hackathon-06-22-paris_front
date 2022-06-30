import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import CoursesList from '../components/CoursesList';
import CreateCourse from '../components/buttons/CreateCourse';

const Courses = () => {
  return (
    <div className="page home-container">
      <h1>Courses</h1>
      <CreateCourse />
      <CoursesList />
    </div>
  );
};

export default Courses;
