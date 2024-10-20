import React, { useEffect, useState } from "react";
import "./profile.css";
import kavyaImg from "../assets/images/Kavya.jpg";
import axios from "axios";
import { API_URL } from "../constants";

const Profile = () => {
  const [profile, setProfile] = useState(null); // Profile data state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch profile data from the API
  useEffect(() => {
    axios
      .get(`${API_URL}/profile`) // Adjust URL if necessary
      .then((response) => {
        setProfile(response.data); // Store profile data
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        setError("Error fetching profile data");
        setLoading(false); // Stop loading on error
      });
  }, []);

  // Conditional rendering while loading or if error occurs
  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Check if profile data is available before rendering the component
  if (!profile) {
    return <div>No profile data available</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-upper-card">
        <div className="profile-image-section">
          <img src={kavyaImg} alt="Kavya Sharma" />
          <h2 className="name">{profile.name}</h2>
          <h2 className="job-title">
            {profile.currentPosition?.title || "N/A"}
          </h2>
          <h2 className="company">
            {profile.currentPosition?.company || "N/A"}
          </h2>
        </div>
        <div className="profile-description-section">
          <p>{profile.professionalSummary || "No description available"}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
