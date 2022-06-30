import React from 'react'

const CoursesProjectCard = () => {
  return (
    <div className='CoursesProjectCard'>
        <table className='CoursesProjectCard-table'>
          <thead>
            <tr className='CoursesProjectCard-tr'>
              <th>Participants</th>
              <th>Date Created</th>
              <th>Deadline</th>
              <th>Stack</th>
            </tr>
          </thead>
          <tbody className='CoursesProjectCard-td'>
            <td>20</td>
            <td>22 Jui 22</td>
            <td>3 days</td>
            <td>Javascript</td>
          </tbody>
        </table>  
    </div>
  )
}

export default CoursesProjectCard