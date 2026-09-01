import React from "react";

import html from '../assets/Skills icon img/html-5.png';
import css from '../assets/Skills icon img/css.png';
import javascript from '../assets/Skills icon img/js.png';
import react from '../assets/Skills icon img/react.png';
import bootstrap from '../assets/Skills icon img/bootstrap.png';

import node from '../assets/Skills icon img/nodejs.png';
import express from '../assets/Skills icon img/Express.png';
import mongodb from '../assets/Skills icon img/MongoDB.png';
import restapi from '../assets/Skills icon img/restApi.png';
import jwt from '../assets/Skills icon img/jwt.png';

import java from '../assets/Skills icon img/java.png';

import git from '../assets/Skills icon img/git.png';
import github from '../assets/Skills icon img/github.png';
import vscode from '../assets/Skills icon img/Visual Studio Code (VS Code).png';
import intellijIdea from '../assets/Skills icon img/IntelliJ IDEA.png';
import postman from '../assets/Skills icon img/Postman.png';
import netlify from '../assets/Skills icon img/netlify.png';
import render from '../assets/Skills icon img/render.png';

const Skills = () => {

    const skillCategories = [
        {
            title: "Frontend",
            icon: "bi bi-window",
            skills: [
                { name: "HTML5", image: html },
                { name: "CSS3", image: css },
                { name: "JavaScript", image: javascript },
                { name: "React.js", image: react },
                { name: "Bootstrap", image: bootstrap }
            ]
        },
        {
            title: "Backend",
            icon: "bi bi-server",
            skills: [
                { name: "Node.js", image: node },
                { name: "Express.js", image: express },
                { name: "MongoDB", image: mongodb },
                { name: "REST APIs", image: restapi },
                { name: "JWT", image: jwt }
            ]
        },
        {
            title: "Programming",
            icon: "bi bi-code-square",
            skills: [
                { name: "Java", image: java },
                { name: "JavaScript", image: javascript }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: "bi bi-tools",
            skills: [
                { name: "Git", image: git },
                { name: "GitHub", image: github },
                { name: "VS Code", image: vscode },
                { name: "IntelliJ IDEA", image: intellijIdea },
                { name: "Postman", image: postman },
                { name: "Netlify", image: netlify },
                { name: "Render", image: render },
                { name: "MongoDB Atlas", image: mongodb }
            ]
        }
    ];

    return (
        <section className="skills" id="skills">
            <div className="container">

                <div className="skills-heading">
                    <h4 className="skills-title"><i className="bi bi-code-slash"></i> Skills</h4>
                    <p>Technologies and tools I use to build responsive full-stack applications.</p>
                </div>

                <div className="skills-list">

                    {skillCategories.map((category) => (
                        <div className="skill-category" key={category.title}>

                            <div className="category-title">
                                <i className={category.icon}></i>
                                <span>{category.title}</span>
                            </div>

                            <div className="skill-items">

                                {category.skills.map((skill) => (
                                    <div className="skill-chip" key={skill.name}>
                                        {skill.image ? (
                                            <img src={skill.image} alt={skill.name}/>
                                        ) : (
                                            <i className="bi bi-patch-check-fill skill-default-icon"></i>
                                        )}
                                        <span>{skill.name}</span>
                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;