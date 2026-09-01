import React from 'react'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#"><i className="bi bi-code-slash"></i> Vaishnavi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-2">
                            <li className="nav-item">
                                <a className="nav-link active" href="#home" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#certificates">Certificates</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </>
    )
}

export default Navbar