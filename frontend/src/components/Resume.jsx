import React from "react";


function Resume(){
     const resumeUrl = process.env.REACT_APP_API_URL;
    return(
         <section id="resume" style={{ marginTop: '3rem' }}>
      <h2 className="resume-h1">My Resume</h2>

       {/* View Resume Link */}
     <a
     href={`${resumeUrl}/resume`}
     target="_blank"
      rel="noopener noreferrer"
     className="resume-button"
     >
     View Resume
     </a>

      {/* Download Resume Button */}
      <a
  href={`${resumeUrl}/download-resume`}
  className="resume-button"
  style={{ marginLeft: '1rem' }}
>
  Download Resume
</a>

       </section>
       
    );
}

export default Resume;