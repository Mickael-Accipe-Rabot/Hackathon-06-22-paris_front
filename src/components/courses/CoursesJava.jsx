import React from 'react'
import "./coursesProjectCard.css"

const CoursesJava = () => {
  return (
    <div className='coursesJava'>
        <div className='CoursesProjectCard'>
        <table className='CoursesProjectCard-table'>
          <thead>
            <tr className='CoursesProjectCard-tr'>
              <th>Participants</th>
              <th>Start Date</th>
              <th>Duration</th>
              <th>Stack</th>
            </tr>
          </thead>
          <tbody className='CoursesProjectCard-td'>
            <td>15</td>
            <td>15 Jui 22</td>
            <td>5 days</td>
            <td>Java</td>
          </tbody>
        </table>  
    </div>
    </div>
  )
}

export default CoursesJava