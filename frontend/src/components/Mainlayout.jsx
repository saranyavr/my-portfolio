import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";



function Mainlayout(){
    return (
        <div className="main-layout">
            <section id="about">   <About /></section>
             <section id="experience"> <Experience /></section>
           <section id="projects">   <Projects /></section>          
           <section id="resume">   <Resume /></section>
           <section id="contact">   <Contact /></section>
           <section id="footer">   <Footer /></section>
        </div>
    )

};

export default Mainlayout;