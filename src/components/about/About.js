import React from 'react';
import './About.css';

const About = () => {
	return (
		<div className="About container" id="About">
			<h1 className="AboutTitle">Who am I ?</h1>
			<div className='AboutContent'>
				<div className='AboutSectionImage'>
					<img src='photo.jpg' className='AboutImage' alt='profile'></img>
				</div>
				<div className='AboutSectionText'>
					<p className='AboutText1'>I'm a french sofware developer</p>
					<p className='AboutText1'>Passionate about space and IT</p>
				</div>
			</div>
		</div>
	);
}

export default About;