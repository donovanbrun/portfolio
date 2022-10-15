import React from 'react';
import './About.css';

export default function About() {
	return (
        <div className='container'>
            <div className="About" id="About">
                <h1 className="AboutTitle">Who am I ?</h1>
                <div className='AboutContent'>
                    <p className='AboutText1'>I'm a french software developer</p>
                    <p className='AboutText1'>Passionate about space and IT</p>
                    <p className='AboutText1'>Currently working as a apprentice software engineer at Capgemini</p>
                </div>
            </div>
        </div>
	);
}