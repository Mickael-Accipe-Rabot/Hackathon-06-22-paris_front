import React from 'react'
import { Link } from 'react-router-dom';
import "./coursesDetails.css"
import EmailIcon from '@mui/icons-material/Email';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LinkIcon from '@mui/icons-material/Link';
import Navbar from '../components/nav/Navbar';


const CoursesDetails = () => {
  return (
    <div className='coursesDetails'>
        <Navbar/>
         <Link to="/courses">
      <p className='coursesDetails-link'> Back to courses </p> 
      </Link>
      <div className='coursesDetails-content'>
        <h1 className='coursesDetails-name'>Workshop: A new interractive approach to learn Javascript</h1>
      <div className='coursesDetails-personalInfo'>
        <p className='coursesDetails-personalInfoTitle'><AccessibilityNewIcon style={{ color: "#DB743E" }}/>Catherine Dupont</p>
        <p className='coursesDetails-personalInfoTitle'><EmailIcon style={{ color: "#DB743E" }}/>catherine.dupont@apside.com</p>
        <p className='coursesDetails-personalInfoTitle'><LinkIcon style={{ color: "#DB743E" }}/>meet.google.com</p>
        </div>

      <div className='coursesDetails-description'>
        <h2 className='coursesDetails-title'>Description</h2>
        <p>Learn by doing real-world development, supported by detailed step-by-step examples, screencasts and knowledge checks. Become a verified practitioner, building your credentials by completing exercises, activities and assessment checks. Manage your learning based on your personal schedule, with content structured to easily let you pause and progress at will.</p>
      </div>

      </div>
    </div>
  )
}

export default CoursesDetails