import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import CoursesList from '../components/CoursesList'


const Courses = () => {

  return (
    <div className='page home-container'>
        <h1>Courses</h1>

       <CoursesList/>
    </div>
  )
}

export default Courses