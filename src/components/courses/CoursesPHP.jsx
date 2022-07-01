import React from 'react';
import './coursesProjectCard.css';

const CoursesPHP = () => {
  return (
    <div className="CoursesPHP">
      <div className="CoursesProjectCard">
        <table className="CoursesProjectCard-table">
          <thead>
            <tr className="CoursesProjectCard-tr">
              <th>Participants</th>
              <th>Start Date</th>
              <th>Duration</th>
              <th>Stack</th>
            </tr>
          </thead>
          <tbody className="CoursesProjectCard-td">
            <td>12</td>
            <td>22 Jui 22</td>
            <td>1 week</td>
            <td>PHP</td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesPHP;
