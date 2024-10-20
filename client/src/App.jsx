import "./App.css";
import { useEffect, useState } from "react";
import ContactMe from "./components/contact";
import Experience from "./components/experience";
import Introduction from "./components/introduction";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Loading from "./components/loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="main-div">
            <div className="nav-bar">
              <Navbar />
            </div>
            <section id="profile">
              <Profile />
            </section>

            <section id="introduction">
              <Introduction />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="contact">
              <ContactMe />
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
