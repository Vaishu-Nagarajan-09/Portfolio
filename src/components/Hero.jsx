import React from 'react';
import codeStack from '../assets/Code Stack img.png';

const Hero = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className='home-content'>
                                <p className='hero-greeting'>
                                    HELLO, I'M
                                </p>
                                <h1 className='hero-name'>
                                    Vaishnavi
                                </h1>
                                <h2 className='hero-title'>
                                    Aspiring Full Stack Developer
                                </h2>
                                <p className='hero-description'>I build responsive and user-friendly web applications using the MERN Stack. Passionate about learning new technologies and creating real-world projects.</p>

                                <div className="hero-buttons">
                                    <a
                                        href="/Vaishnavi_Resume_01.pdf"
                                        download="Vaishnavi-resume.pdf"
                                        className="primary-btn"
                                    >
                                        Download Resume
                                    </a>
                                    <a href="#projects" className='secondary-btn'>
                                        View Projects
                                    </a>
                                </div>

                                <div className="social-icon">
                                    <p>
                                        Connect with me
                                        <a href='https://github.com/Vaishu-Nagarajan-09' target='_blank' rel='noreferrer' className='social-link'><i className="bi bi-github"></i></a>
                                        <a href='https://www.linkedin.com/in/vaishnavi-nn' target='_blank' rel='noreferrer' className='social-link'><i className="bi bi-linkedin"></i></a>
                                        <a href='mailto: vaishnavinn421@gmail.com' className='social-link'><i className="bi bi-envelope"></i></a>
                                    </p>
                                </div>


                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center align-items-center mt-3 mt-lg-0">
                            <img src={codeStack} alt="Full stack development illustration" className='hero-img' />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;