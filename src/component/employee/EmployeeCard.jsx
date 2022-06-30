import React from 'react'

const EmployeeCard = ({employee}) => {
  return (
    <div className='EmployeeCard'>
<img src={employee.imageURL} />
<h1>{employee.firstName}</h1>
<h1>{employee.lastName}</h1>
    </div>
  )
}

export default EmployeeCard