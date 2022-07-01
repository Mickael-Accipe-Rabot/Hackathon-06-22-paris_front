import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoursesList from '../components/CoursesList';
import CreateCourse from '../components/buttons/CreateCourse';
import Navbar from '../components/nav/Navbar';


const Courses = () => {
  return (
    <div className="page courses-container">
      <Navbar/>
      <h1>Courses</h1>
      <CreateCourse />
      <CoursesList />
    </div>
  );
};

export default Courses;
