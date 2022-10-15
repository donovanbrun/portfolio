import React from 'react';
import './Contact.css';

export default function Contact() {

    return (
        <div className="Contact container" id="Contact">
            <h1 className="Contact-Title">Contact me</h1>
            <div className='ContactSection'>
                <a href='https://www.linkedin.com/in/donovan-brun/' target="_blank" rel="noreferrer"><img alt="linkedin" className="ContactImage" src='linkedin.png'/></a>
                <a href='https://github.com/donovanbrun' target="_blank" rel="noreferrer"><img alt="github" className="ContactImage" src='github.png'/></a>
            </div>
        </div>
    );
}