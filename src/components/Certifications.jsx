import React from "react";
import javaCertificate from '../assets/java workshop-img.png';
import mernCertificate from '../assets/FSD - img.png';
import promisingStar from '../assets/Promising Star Award - img.png';

const Certification = () => {
    return(
        <>
        <section className="certificates" id="certificates">
            <div className="container">
                <h4 className="certificate-title"><i className="bi bi-award"></i> Certificates</h4>
                <div className="row justify-content-center">

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="certificate-card">
                            <img src={javaCertificate} alt="Java Workshop cerificate img" className="certificate-img" />

                            <div className="certificate-content">
                              <h5>Java Workshop</h5>
                                <p>Issued by: CodeIo</p>
                                <span className="certificate-year">2025</span>

                                <a href="/certificates/Java Workshop Certificate.jpg"
                                className="certificate-btn"
                                target="_blank"
                                rel="noreferrer"                             
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="certificate-card">
                            <img src={mernCertificate} alt="MERN Stack cerificate img" className="certificate-img" />

                            <div className="certificate-content">
                              <h5>Full Stack Development(MERN Stack)</h5>
                                <p>Issued by: Simplar</p>
                                <span className="certificate-year">2026</span>

                                <a href="/certificates/MERN Stack Certificate.png"
                                className="certificate-btn"
                                target="_blank"
                                rel="noreferrer"                             
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="certificate-card">
                            <img src={promisingStar} alt="Promising star Award cerificate img" className="certificate-img" />

                            <div className="certificate-content">
                              <h5>Promising Star Award</h5>
                                <p>Issued by: Simplar</p>
                                <span className="certificate-year">2026</span>

                                <a href="/certificates/Promising Star Award Certificate.png"
                                className="certificate-btn"
                                target="_blank"
                                rel="noreferrer"                             
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </section>
        </>
    )
}

export default Certification;