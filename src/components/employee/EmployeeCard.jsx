import React from 'react';
import './employeeCard.css';

const EmployeeCard = ({ employeeInfo }) => {
  return (
    <div className="EmployeeCard">
      <img
        className="employeeCard-img"
        src="https://randomwordgenerator.com/img/picture-generator/57e1d1444252af14f1dc8460962e33791c3ad6e04e5074417c2f73d59f49c5_640.jpg"
      />
      <p className="employeeCard-name">
        {employeeInfo.employee_firstname} {employeeInfo.lastname}
      </p>
    </div>
  );
};

export default EmployeeCard;
