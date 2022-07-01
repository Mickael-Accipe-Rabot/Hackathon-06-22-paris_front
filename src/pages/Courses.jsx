import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoursesList from '../components/CoursesList';

const Courses = () => {
  return (
    <div className="page courses">
      <CoursesList />
    </div>
  );
};

export default Courses;
