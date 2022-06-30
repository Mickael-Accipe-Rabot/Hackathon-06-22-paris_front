import React from 'react'
import "./coursesDetails.css"
im

const coursesDetails = () => {
const [coursesInfo, setCoursesInfo] = useState([]);
  const { coursesID } = useParams();

  useEffect(() => {
      axios
        .get(`http://localhost:8000/api/courseslist/${coursesID}`)
        .then((res) => res.data)
        .then((data) => setClientInfo(data));
    }, [coursesID]);
  return (
    <div className='coursesDetails'>
         <Link to="/clientslist">
      <p className='clientDetails-link'> Back to clients </p> 
      </Link>
      {clientInfo &&
      <div className='clientDetails-content'>
        <h1 className='clientDetails-name'>{coursesInfo.name}</h1>
      <div className='clientDetails-personalInfo'>
        <p className='clientDetails-personalInfoTitle'><LocationOnIcon style={{ color: "#DB743E" }}/> {coursesInfo.city}</p>
        <p className='clientDetails-personalInfoTitle'><EmailIcon style={{ color: "#DB743E" }}/> {coursesInfo.email}</p>
        </div>

      <div className='clientDetails-description'>
        <h2 className='clientDetails-title'>Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className='clientDetails-project'>
        <h2 className='clientDetails-title'>Projects</h2>
       <div className='clientDetails-card'> <ClientProjectCard clientID={clientID}/> </div>
      </div>
      </div>
}


    </div>
  )
}

export default coursesDetails