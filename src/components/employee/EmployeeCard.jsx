import React from 'react'

const EmployeeCard = ({employee}) => {
  return (
    <div className='EmployeeCard'>
<h1>{employee.firstname}</h1>
<h1>{employee.lastname}</h1>
    </div>
  )
}

export default EmployeeCard