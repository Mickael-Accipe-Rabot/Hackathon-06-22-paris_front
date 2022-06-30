import React from 'react'
import "./employeeCard.css"

const EmployeeCard = ({ employee }) => {
  return (
    <div className='EmployeeCard'>
    <p className='employeeCard-name'>{employee.firstname} {employee.lastname}</p>
  </div>  )
}

export default EmployeeCard