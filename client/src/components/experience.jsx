import React, { useState, useEffect } from "react";
import "./experience.css"; // CSS file for styling
import axios from "axios";
import { API_URL } from "../constants";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/experience`);
        setExperienceData(response.data[0].experience); // Adjust based on the API response
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleDrawer = (company) => {
    setSelectedCompany(company);
    setIsOpen(!isOpen);
  };

  if (!experienceData.length) {
    return <p></p>;
  }

  return (
    <div className="experience-container">
      <h2 className="experience-heading">My Experience</h2>
      <div className="buttons-container">
        {experienceData.map((item, index) => (
          <button
            key={index}
            className="drawer-button"
            onClick={() => toggleDrawer(item)}
          >
            {item.company}
          </button>
        ))}
      </div>

      <div className={`drawer ${isOpen ? "open" : ""}`}>
        {isOpen && selectedCompany && (
          <div className="drawer-content">
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✖
            </button>
            <h3>
              {selectedCompany.job_title} at {selectedCompany.company}
            </h3>
            <h3 className="p-duration">Duration: {selectedCompany.duration}</h3>
            <h3 className="p-location">Location: {selectedCompany.location}</h3>
            <h4>Responsibilities:</h4>
            <ul>
              {selectedCompany.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
