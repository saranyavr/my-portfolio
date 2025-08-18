import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';



function Sidebar(){
    return (
        <aside className='side-bar'>
            <div className='intro'>
                <h1> Saranya Rajmohan</h1>
                <h3> MERN Stack Developer</h3>
                <p> Hi! I’m a MERN Stack Developer passionate 
                    about building scalable and accessible web apps.</p>
                    <h3>Skills</h3>
                       <div>
            <span className="skill-chip">React</span>
             <span className="skill-chip">Node.js</span>
             <span className="skill-chip">Express</span>
            <span className="skill-chip">MongoDB</span>
           <span className="skill-chip">REST APIs</span>
           <span className="skill-chip">UI/UX</span>
  </div>
            </div>
            <nav className='nav-links'>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#experience'>Experience</a>
                <a href='#contact'>Contact</a>
            </nav>
            <div className='social-links'>
                <a href='https://github.com/saranyavr' target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/saranya-k-451524230' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin />
                </a>
                <a href='https://x.com/Saranyakalidoss' target='_blank' rel='noopener noreferrer'>
                    <FaTwitter />
                </a>
            </div>

        </aside>
    );
}

export default Sidebar;