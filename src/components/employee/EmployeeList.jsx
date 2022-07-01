import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './employeeList.css';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ projectID }) => {
  const [employeeInfo, setEmployeeInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/project-employees/${projectID}`)
      .then((res) => res.data)
      .then((data) => setEmployeeInfo(data));
  }, []);

  return (
    <div className="EmployeeList">
      <div>
        {employeeInfo && (
          <EmployeeCard key={employeeInfo.ID} employeeInfo={employeeInfo} />
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
