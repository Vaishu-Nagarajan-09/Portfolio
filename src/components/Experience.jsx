import React from "react";

const Experience = () => {
    return (
        <>
            <section className="experience" id="experience">
                <div className="container">
                    <h4 className="section-title"><i className="bi bi-bag"></i> Experience</h4>
                    <div className="experience-card">
                        <div className="experience-header">
                            <div>
                                <h5><i className="bi bi-person-workspace"></i> Web Developer Intern</h5>
                                <h6>Jaran Technology Services</h6>
                            </div>
                            <div className="experience-meta">
                                <span className="experience-date">
                                    Dec 2024 - Apr 2025
                                </span>

                                <span className="experience-location">
                                    Madurai, Tamil Nadu
                                </span>
                            </div>
                        </div>

                            <ul className="experience-description">
                                <li>
                                    Developed responsive web interfaces using
                                    HTML, CSS, JavaScript and Bootstrap.
                                </li>
                                <li>
                                    Worked with Core Java concepts and prepared
                                    learning materials.
                                </li>
                                <li>
                                    Taught core java concepts and created lesson plans.
                                </li>
                                <li>
                                    Tested and debugged REST APIs using Postman.
                                </li>
                                <li>
                                    Fixed UI and application issues to improve
                                    functionality and responsiveness.
                                </li>
                            </ul>
                        </div>
                    </div>

            </section>
        </>
    )
}

export default Experience;