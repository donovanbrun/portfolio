import React from 'react';
import './About.css';

export default function About() {
	return (
		<div className="About container" id="About">
			<h1 className="AboutTitle">Who am I ?</h1>
			<div className='AboutContent'>
				<div className='AboutSectionText'>
					<p className='AboutText1'>I'm a french sofware developer</p>
					<p className='AboutText1'>Passionate about space and IT</p>
				</div>
			</div>
		</div>
	);
}