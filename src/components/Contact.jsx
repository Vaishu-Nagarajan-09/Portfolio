import React from "react";

const Contact = () => {
    return( 
        <>
        <section className="contact" id="contact">
            <div className="container">
                <h4 className="contact-title"> <i className="bi bi-send"></i> Get In Touch</h4>
                <div className="contact-bar">
                    <div className="contact-intro">
                        <p>
                            I'm always open to discussing new projects,
                            creative ideas or opportunities to be part
                            of your vision.
                        </p>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="bi bi-envelope"></i>
                        </div>
                        <div>
                            <span>Email</span>
                            <p>vaishnavinn421@gmail.com</p>
                        </div>
                        </div>

                        <div className="contact-item">
                        <div className="contact-icon">
                            <i className="bi bi-telephone"></i>
                        </div>
                        <div>
                            <span>Phone</span>
                            <p>+91 9360883916</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="bi bi-geo-alt"></i>
                        </div>
                        <div>
                            <span>Location</span>
                            <p>Madurai, TamilNadu</p>
                        </div>
                    </div>

                    <div className="contact-action">
                        <a href="mailto: vaishnavinn421@gmail.com">
                            Let's Connect
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default Contact;