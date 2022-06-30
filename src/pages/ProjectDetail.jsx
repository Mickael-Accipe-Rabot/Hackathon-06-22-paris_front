import React from 'react'
import './projectDetails.css'
import EmployeeList from '../component/employee/EmployeeList'
import ShowInterest from '../component/buttons/ShowInterest'

const ProjectDetails = () => {
  return (
    <div className='page projectDetails-container'>
    <h1>ProjectDetail</h1>

    <ShowInterest />
    <EmployeeList/>
    </div>
  )
}

export default ProjectDetails