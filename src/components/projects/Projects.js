import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="Projects container" id="Projects">
            <h1 className="Projects-Title">Projects</h1>
            <div className='Projects-list'>
                <Project name="Organizr" github="https://github.com/donovanbrun/organizr-back" description="My productivity projet"/>
                <Project name="Portfolio" github="https://github.com/donovanbrun/portfolio" description="Obviously this portfolio"/>
                <Project name="V8" github="https://github.com/donovanbrun/portfolio" description="Website for my V8 computer case project"/>
            </div>
        </div>
    );
}

const Project = (props) => {
    return (
        <div className='Project'>
            <p className='ProjetTitle'>{props.name}</p>
            <p className='ProjectDescription'>{props.description}</p>
            <a className='' href={props.github} target="_blank" rel="noreferrer">See on Github</a>
        </div>
    );
}

export default Projects;