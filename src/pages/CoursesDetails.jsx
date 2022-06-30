import React from 'react'
import { Link } from 'react-router-dom';
import "./coursesDetails.css"
import CoursesProjectCard from '../components/courses/CoursesProjectCard';
import EmailIcon from '@mui/icons-material/Email';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const coursesDetails = () => {
  return (
    <div className='coursesDetails'>
         <Link to="/courses">
      <p className='clientDetails-link'> Back to courses </p> 
      </Link>
      <div className='clientDetails-content'>
        <h1 className='clientDetails-name'>Workshop: Javascript</h1>
      <div className='clientDetails-personalInfo'>
        <p className='clientDetails-personalInfoTitle'><AccessibilityNewIcon style={{ color: "#DB743E" }}/>Catherine Dupont</p>
        <p className='clientDetails-personalInfoTitle'><EmailIcon style={{ color: "#DB743E" }}/>catherine.dupont@apside.com</p>
        </div>

      <div className='clientDetails-description'>
        <h2 className='clientDetails-title'>Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className='clientDetails-project'>
        <h2 className='clientDetails-title'>Projects</h2>
       <div className='clientDetails-card'> <CoursesProjectCard /> </div>
      </div>
      </div>
    </div>
  )
}

export default coursesDetails