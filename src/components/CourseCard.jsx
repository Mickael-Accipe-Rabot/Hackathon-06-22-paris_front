import React from 'react';
import { Link } from 'react-router-dom';
import './courseCard.css';
import moment from 'moment';
const CourseCard = ({ course, color }) => {
  const start_date = moment(course.start_date).format('MMM Do YY');
  const end_date = moment(course.end_date).format('MMM Do YY');

  return (
    <div className="courseCard-container">
      <Link to={`/course-detail${course.id}`}className='course-card2'>
        <h3 className="course-title">{course.project_name}</h3>
        <p className="course-date">{start_date}</p>
        {console.log(course)}
        <p className="course-stack stack-tag">Stacks</p>
      </Link>
    </div>
  );
};

export default CourseCard;
