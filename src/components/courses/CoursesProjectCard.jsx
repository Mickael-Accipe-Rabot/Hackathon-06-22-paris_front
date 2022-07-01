import React from 'react';
import './coursesProjectCard.css';
import { Link } from 'react-router-dom';

const CoursesProjectCard = () => {
  return (
    <Link
      to={'/courses-details'}
      style={{ textDecoration: 'none', color: 'black' }}
    >
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
            <td>20</td>
            <td>2 Jui 22</td>
            <td>3 days</td>
            <td>Javascript</td>
          </tbody>
        </table>
      </div>
    </Link>
  );
};

export default CoursesProjectCard;
