import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './clientProjectCard.css';
import moment from 'moment';

const ClientProjectCard = ({ clientID }) => {
  const [clientProjectInfo, setClientProjectInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/projects/${clientID}`)
      .then((res) => res.data)
      .then((data) => setClientProjectInfo(data));
  }, []);

  const start_date = moment(clientProjectInfo.start_date).format('MMM Do YY');
  const end_date = moment(clientProjectInfo.end_date).format('MMM Do YY');

  return (
    <div className="ClientProjectCard">
      {clientProjectInfo && (
        <div className="clientProject-data">
          <table className="clientProject-table">
            <thead>
              <tr className="clientProject-tr">
                <th>Project</th>
                <th>Date Created</th>
                <th>Deadline</th>
                <th>Stack</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="clientProject-td">
              <td>{clientProjectInfo.name}</td>
              <td>{start_date}</td>
              <td>{end_date}</td>
              <td>React-PHP</td>
              <td>{clientProjectInfo.priority}</td>
              <td>{clientProjectInfo.status_id}</td>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClientProjectCard;
