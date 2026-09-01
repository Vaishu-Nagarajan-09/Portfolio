import React from "react";
import profile from '../assets/My profile-pic.png';

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <h4 className="abt"><i className="bi bi-person"></i> About Me</h4>

                    <div className="row align-items-center">

                        <div className="col-lg-8 col-md-7">
                           
                                
                                <p className="abt-desc">I'm Vaishnavi, an aspiring Full Stack Developer passionate about building responsive and user-friendly web applications using the MERN Stack. I enjoy solving real-world problems, learning modern technologies, and continuously improving my development skills through hands-on projects.</p>
                               
                                <div className="about-points">
                                    <p><i className="bi bi-caret-right"></i> Currently Strengthening My MERN Stack</p>
                                    <p><i className="bi bi-caret-right"></i> Strong foundation in Java</p>
                                    <p><i className="bi bi-caret-right"></i> Passionate about Frontend Development</p>
                                    <p><i className="bi bi-caret-right"></i> Love building real-world projects</p>
                                    <p><i className="bi bi-caret-right"></i> Always curious and learning new things</p>
                                </div>

                            </div>

                        {/* profile img */}

                        <div className="col-lg-4 col-md-5 text-center mt-3 mt-md-0">
                            <img src={profile}alt="profile-pic" className="about-img" />
                        </div>
                    </div>

              </div>

            </section>
        </>
    )
}

export default About;