import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ClientDetails from './pages/ClientDetails';
import ClientsList from './pages/ClientsList';
import Login from './pages/Login';
import ProjectDetails from './pages/ProjectDetail';
import ProjectForm from './pages/ProjectForm';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/client-details" element={<ClientDetails/>}></Route>
        <Route path="/clientslist" element={<ClientsList/>}></Route>
        <Route path="/project-details" element={<ProjectDetails/>}></Route>
        <Route path="/project-form" element={<ProjectForm/>}></Route>
        <Route path="/user-profile" element={<UserProfile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
