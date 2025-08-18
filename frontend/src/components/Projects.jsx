import React, { useEffect, useState } from "react";



function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/projects`;
    console.log("Fetching from:", url);
    fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      setProjects(data);
      console.log("Fetched projects:", data);
    })
    .catch(err => {
      console.error("Error fetching projects:", err);
    });
}, []);



  

  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map(proj => (
      <div key={proj.id} className="project-card">
        <h3 className="project-title">{proj.name}</h3>
        <p className="project-description">{proj.description}</p>
        <div>
          <strong className="project-tech-title">Technologies: </strong>
          <div className="project-tech-list">
            {proj.technologies && proj.technologies.length > 0 ? (
              proj.technologies.map((tech, index) => (
                <span className="project-tech-list-item" key={index}>
                  {tech}
                </span>
              ))
            ) : (
              "Not specified"
            )}
          </div>
        </div>
        <a className="project-a" href={proj.mainLink} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;
