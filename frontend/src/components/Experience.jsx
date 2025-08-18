import React, {useState, useEffect} from "react";


function Experience(){
    const [experience, setExperience] = useState([]);


    useEffect(() => {
        const fetchExperience = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/experience`);
           const data = await response.json();
            setExperience(data);
           console.log("Experience data fetched:", data);
          
        };
        fetchExperience();
    }, []);

    return (
        <div className="experience-section">
      <div className="experience-card">
        <h2>Experience</h2>
        {experience.map((exp) => (
          <div key={exp.id} className="experience-individual">
            <div className="experience-row">
              {/* LEFT SIDE - Dates & Location */}
              <div className="experience-side left">
                <p className="experience-location">{exp.location}</p>
                <p className="experience-dates">
                  {exp.startDate} – {exp.endDate}
                </p>
              </div>

              {/* CENTER - Main Content */}
              <div className="experience-center">
                <h3 className="experience-title">{exp.jobTitle}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="tech-list">
                  {exp.techList.split(",").map((tech, idx) => (
                    <span key={idx} className="tech-list-item">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE - (Optional for future use) */}
              <div className="experience-side right">
                {/* you can add icons, links, etc */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Experience;
