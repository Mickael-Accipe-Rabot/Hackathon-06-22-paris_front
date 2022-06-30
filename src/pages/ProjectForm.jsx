import React from "react";
import "./projectForm.css";
import axios from "axios";
import { useState } from "react";
import flata from "../assets/images/flata.svg";

const ProjectForm = () => {
  const [project, setProject] = useState("");
  const [client, setClient] = useState("");
  const [agency, setAgency] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [stacks, setStacks] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      project: project,
      client: client,
      agency: agency,
      activity: activity,
      description: description,
      stacks: stacks,
      startTime: startTime,
      endTime: endTime,
      priority: priority,
    };

    axios
      .post("http://localhost:8000/api/project", data)
      .then((res) => {
        console.log(res.data);
        window.location = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="page-container page">
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
            required
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />

          <label htmlFor="name">Client name</label>
          <input
            placeholder="Enter a client name"
            type="text"
            required
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />

          <label htmlFor="name">Agency</label>
          <input
            placeholder="Enter an agency"
            type="text"
            required
            value={agency}
            onChange={(e) => setAgency(e.target.value)}
          />

          <label htmlFor="name">Activity</label>
          <input
            placeholder="Enter an activity"
            type="textarea"
            required
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />

          <label htmlFor="name">Description</label>
          <textarea
            placeholder="Enter a description"
            type="textarea"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="name">Stacks</label>
          <select
            placeholder="Select a stack"
            type="text"
            required
            value={stacks}
            onChange={(e) => setStacks(e.target.value)}
          >
            <option value="Ecoaction">Type d'Eco Event</option>
            <option value="Dépollution">Dépollution</option>
            <option value="Nettoyage">Nettoyage</option>
            <option value="Réparation">Réparation</option>
            <option value="Recyclage">Recyclage</option>
            <option value="Collecte">Collecte</option>
            <option value="Don">Don</option>
          </select>

          <label htmlFor="name">Start date</label>
          <input
            placeholder="DD/MM/YYYY"
            type="date"
            required
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <label htmlFor="name">End date</label>
          <input
            placeholder="DD/MM/YYYY"
            type="date"
            required
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          <label htmlFor="name">Priority</label>
          <select
            placeholder="Select a priority project"
            type="select"
            required
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Ecoaction">Type d'Eco Event</option>
            <option value="Dépollution">Dépollution</option>
            <option value="Nettoyage">Nettoyage</option>
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
