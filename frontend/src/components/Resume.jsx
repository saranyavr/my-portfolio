import React from "react";


function Resume(){
     const resumeUrl = `${process.env.REACT_APP_API_URL}/resume`;
    return(
       <section id="resume" style={{ marginTop: '3rem' }}>
      <h2 className="resume-h1">My Resume</h2>

       {/* View Resume Link */}
     <a
     href={resumeUrl}
     target="_blank"
      rel="noopener noreferrer"
     className="resume-button"
     >
     View Resume
     </a>

       </section>
       
    );
}

export default Resume;