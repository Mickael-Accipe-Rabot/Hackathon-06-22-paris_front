import React from 'react'
import './projectDetails.css'
import EmployeeList from '../component/employee/EmployeeList'

const ProjectDetails = () => {
  return (
    <div className='page projectDetails-container'>
    <h1>ProjectDetail</h1>
    <EmployeeList/>
    </div>
  )
}

export default ProjectDetails