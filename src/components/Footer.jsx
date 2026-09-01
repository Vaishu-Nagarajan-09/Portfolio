import React from "react";

const Footer = () => {
    return (
        <>
            <section className="footer" id="footer">
                <div className="container">
                    <div className="footer-content">

                        <div className="footer-brand">
                            <i className="bi bi-code-slash"></i>
                            <span>Vaishnavi</span>
                        </div>

                        <p>
                            © 2026 Vaishnavi. All rights reserved.
                        </p>

                        <p>
                            Built with <span className="heart">❤️</span> using React.js
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}


export default Footer;