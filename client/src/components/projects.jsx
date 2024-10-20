import React, { useEffect, useState } from "react";
import axios from "axios";
import "./projects.css"; // Optional: for styles
import { API_URL } from "../constants";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/projects`); // Adjust the URL if necessary
        setProjects(response.data.projects); // Assuming the projects are in the array under `projects`
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchProjects();
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="projects-carousel">
      {projects.length > 0 ? (
        <>
          <button className="arrow left" onClick={prevProject}>
            &lt;
          </button>
          <div className="project">
            <div className="project-details">
              <h2 className="main-heading">Projects</h2>
              <h2>{projects[currentIndex].name}</h2>
              <p>{projects[currentIndex].description}</p>
              <p>
                <strong>Technologies:</strong>{" "}
                {projects[currentIndex].technologies.join(", ")}
              </p>
            </div>
          </div>
          <button className="arrow right" onClick={nextProject}>
            &gt;
          </button>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Projects;
