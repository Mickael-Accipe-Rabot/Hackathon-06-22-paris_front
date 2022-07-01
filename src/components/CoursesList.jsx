import React from 'react';
import './coursesList.css';

import CoursesProjectCard from './courses/CoursesProjectCard';
import CoursesPHP from './courses/CoursesPHP';
import CoursesJava from './courses/CoursesJava';

const CoursesList = () => {
  return (
    <div className='CourseList'>
        <h1 className='CourseList-title'>Improve your skills with our E-learning modules</h1>
        <div className='CourseList-content'>
        <CoursesProjectCard/>
        <CoursesPHP/>
        <CoursesJava/>
        </div>
    </div>
  );
};

export default CoursesList;
