import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./employeeList.css"
import EmployeeCard from './EmployeeCard'

const EmployeeList = () => {

    const [employeeInfo, setEmployeeInfo] = useState([]);

    useEffect(() => {
        axios
          .get('http://localhost:8000/api/employees')
          .then((res) => res.data)
          .then((data) => setEmployeeInfo(data));
      }, []);

  return (
    <div className='EmployeeList'>
        <div>
        {employeeInfo &&
          employeeInfo.map((employee) => 
              <EmployeeCard key={employee.ID} employee={employee}/>
          )}
          </div>
    </div>
  )
}

export default EmployeeList