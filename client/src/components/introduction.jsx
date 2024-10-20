import React, { useEffect, useState } from "react";
import axios from "axios";
import "./introduction.css"; // Make sure to import your CSS file
import { API_URL } from "../constants";

const Introduction = () => {
  const [introduction, setIntroduction] = useState(null);

  useEffect(() => {
    const fetchIntroduction = async () => {
      try {
        const response = await axios.get(`${API_URL}/skills`); // Adjust the URL if necessary
        setIntroduction(response.data);
      } catch (error) {
        console.error("Error fetching introduction data:", error);
      }
    };

    fetchIntroduction();
  }, []);

  if (!introduction) {
    return <div></div>; // Handle loading state
  }

  return (
    <section className="introduction-section">
      <div className="card intro-card">
        <h2>Introduction</h2>
        <p>{introduction.summary}</p> {/* Dynamic summary from API */}
      </div>
      <div className="card skills-card">
        <h2>Skills</h2>
        <ul>
          {Object.entries(introduction.skills).map(([category, skills]) => (
            <li key={category}>
              {category}: {skills.join(", ")} {/* Dynamic skills from API */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Introduction;
