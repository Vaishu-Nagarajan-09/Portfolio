import React from "react";

import docPilotImage from "../assets/docPilotimg.png";
import frostCastImage from "../assets/frostCastimg.png";
import wristifyImage  from "../assets/wristifyImg.png";

const Projects = () => {

    const projects = [
        {
            title: "DocPilot AI - Prototype Assistant Document",
            description: "Full-stack document assistant built using the MERN Stack.",
            technologies: ["MERN", "JWT", "Bootstrap"],
            image: docPilotImage,
            github: "https://github.com/Vaishu-Nagarajan-09/DocPilot-ai",
            live: "https://docpilot-ai-ass.netlify.app/"
        },
        {
            title: "Wristify",
            description:  "Wristify — MERN e-commerce platform for watch shopping and cart management.",
            technologies: ["MERN", "JWT", "Bootstrap"],
            image: wristifyImage,
            github: "https://github.com/Vaishu-Nagarajan-09/Wristify",
            live: "https://wristify-watches.netlify.app/"
        },
        {
            title: "FrostCast Weather",
            description: "Weather application built with React and API integration.",
            technologies: ["React.js", "API", "Bootstrap"],
            image: frostCastImage,
            github: "https://github.com/Vaishu-Nagarajan-09/FrostCast-Weather-App",
            live: "https://frostcast-weather.netlify.app/"
        },
        
    ]
    return(
        <>
        <section className="projects" id="projects">
            <div className="container">
                <h4 className="proj-title"><i className="bi bi-folder-fill"></i> Projects</h4>
                <div className="row justify-content-center">

                    {projects.map((project) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={project.title}>
                            <div className="project-card">
                                <img src={project.image} alt={project.title} 
                                className="project-img" />

                                <div className="project-content">
                                    <h5>{project.title}</h5>
                                    <p>{project.description}</p>

                                    <div className="project-tech">
                                        {project.technologies.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-buttons">
                                        <a href={project.github} className="proj-github">
                                            <i className="bi bi-github"></i>
                                            GitHub
                                        </a>

                                        {project.live && (
                                            <a href={project.live} className="proj-live">
                                                <i className="bi bi-box-arrow-up-right"></i>
                                                Live Demo
                                            </a>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}


export default Projects;