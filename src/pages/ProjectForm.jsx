import React from "react";
import Navbar from '../components/nav/Navbar'
import "./projectForm.css";
import axios from "axios";
import { useState, useEffect } from "react";
import flata from "../assets/images/flata.svg";

const ProjectForm = () => {
  const [dataAgencies, setDataAgencies] = useState([]);
  const [dataActivities, setDataActivities] = useState([]);
  const [dataStacksOne, setDataStacksOne] = useState([]);
  const [dataStacksTwo, setDataStacksTwo] = useState([]);
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const [secret, setSecret] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [client, setClient] = useState("");
  const [dataAgency, setDataAgency] = useState("");
  const [dataStackOne, setDataStackOne] = useState("");
  const [dataStackTwo, setDataStackTwo] = useState("");
  const [category, setCategory] = useState("");
  const [dataActivity, setDataActivity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: project,
      description: description,
      secret: secret,
      start_date: startTime,
      end_date: endTime,
      priority: priority,
      stackOne: dataStackOne.id,
      stackTwo: dataStackTwo.id,
      status_id: status,
      client_id: client,
      agency_id: dataAgency.id,
      projet_category_id: category,
      project_sector_id: dataActivity.id,
    };
    
    axios
      .post(`${process.env.REACT_APP_API_URL}/projects`)
      .then((res) => {
        console.log(res.data);
        window.location = "/Home";
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/agencies`)
      .then((res) => res.data)
      .then((data) => setDataAgencies(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/project-sector`)
      .then((res) => res.data)
      .then((data) => setDataActivities(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/skill`)
      .then((res) => res.data)
      .then((data) => setDataStacksOne(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/skill`)
      .then((res) => res.data)
      .then((data) => setDataStacksTwo(data));
  }, []);

  return (
    <div className="page-container page form-project-page">
      <Navbar/>
      <div className="bloc-title">
        <div className="add-project">CREATE A NEW PROJECT</div>
        <img src={flata} className="flata" />
      </div>
      <div className="container-form">
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <label htmlFor="name">Project title</label>
          <input
            placeholder="Enter a project title"
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />

          <div className="bloc-date">
            <div className="bloc-date-start">
              <label htmlFor="name">Confidential</label>
              <select
                placeholder="Select type"
                type="text"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              >
                <option value="1">Yes</option>
                <option value="2">Not</option>
              </select>
            </div>

            <div className="bloc-date-start">
              <label htmlFor="name">Category</label>
              <select
                placeholder="Select a category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="1">Client</option>
                <option value="2">Internal project</option>
                <option value="1">Courses</option>
              </select>
            </div>
          </div>

          <div className="bloc-date">
            <div className="bloc-date-start">
              <label htmlFor="name">Client name</label>
              <input
                placeholder="Enter a client name"
                type="text"
                value={client}
                onChange={(e) => setClient(e.target.value)}
              />
            </div>

            <div className="bloc-date-start">
              <label htmlFor="name">Status</label>
              <select
                placeholder="Select a status"
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="1">Design</option>
                <option value="2">Developpement</option>
                <option value="1">Testing</option>
                <option value="2">Deployed</option>
              </select>
            </div>
          </div>

          <div className="bloc-date">
            <div className="bloc-date-start">
              <label htmlFor="name">Agency</label>
              <select
                placeholder="Enter an agency"
                type="text"
                value={dataAgency}
                onChange={(e) => setDataAgency(e.target.value)}
              >
                {dataAgencies &&
                  dataAgencies.map((dataAgency) => (
                    <option key={dataAgency.id}>{dataAgency.name}</option>
                  ))}
              </select>
            </div>

            <div className="bloc-date-start">
              <label htmlFor="name">Activity</label>
              <select
                placeholder="Enter an activity"
                type="textarea"
                value={dataActivity}
                onChange={(e) => setDataActivity(e.target.value)}
              >
                {dataActivities &&
                  dataActivities.map((dataActivity) => (
                    <option key={dataActivity.id}>{dataActivity.name}</option>
                  ))}
              </select>
            </div>
          </div>

          <label htmlFor="name">Description</label>
          <textarea
            placeholder="Enter a description"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="bloc-date">
            <div className="bloc-date-start">
              <label htmlFor="name">Front Stack</label>
              <select
                placeholder="Select a stack"
                type="text"
                value={dataStackOne}
                onChange={(e) => setDataStackOne(e.target.value)}
              >
                {dataStacksOne &&
                  dataStacksOne.map((dataStackOne) => (
                    <option key={dataStackOne.id}>{dataStackOne.name}</option>
                  ))}
              </select>
            </div>

            <div className="bloc-date-start">
              <label htmlFor="name">Back Stack</label>
              <select
                placeholder="Select a stack"
                type="text"
                value={dataStackTwo}
                onChange={(e) => setDataStackTwo(e.target.value)}
              >
                {dataStacksTwo &&
                  dataStacksTwo.map((dataStackTwo) => (
                    <option key={dataStackTwo.id}>{dataStackTwo.name}</option>
                  ))}
              </select>
            </div>
          </div>

          <div className="bloc-date">
            <div className="bloc-date-start">
              <label htmlFor="name">Start date</label>
              <input
                placeholder="DD/MM/YYYY"
                type="date"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            <div className="bloc-date-start">
              <label htmlFor="name">End date</label>
              <input
                placeholder="DD/MM/YYYY"
                type="date"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <label htmlFor="name">Priority</label>
          <select
            placeholder="Select a priority project"
            type="select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">Strong</option>
          </select>

          <button onClick={handleSubmit} className="button-addproject">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
