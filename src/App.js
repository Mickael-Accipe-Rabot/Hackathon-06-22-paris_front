import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserProvider from "./contexts/UserProvider";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import ClientDetails from "./pages/ClientDetails";
import ClientsList from "./pages/ClientsList";
import Login from "./pages/Login";
import ProjectDetails from "./pages/ProjectDetail";
import ProjectForm from "./pages/ProjectForm";
import UserProfile from "./pages/UserProfile";
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/client-details" element={<ClientDetails />}></Route>
          <Route path="/clientslist" element={<ClientsList />}></Route>
          <Route path="/project-details/:projectID" element={<ProjectDetails />}></Route>
          <Route path="/project-form" element={<ProjectForm />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;