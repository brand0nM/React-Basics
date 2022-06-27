import React from 'react'
import email from '../Images/email.png'

export default function MainContent(){
	return(
		<div className='mainContent'>
			<h1>Brandon Montalvo</h1>
			<h3>Frontend Developer/Data Analyst</h3>
			<h4>brandon.montalvo@colorado.edu</h4>
			<button className='emailButton' ><img src={email} alt= ' '/> Email</button>
			<h2>About</h2>
			<p>I do some stuff sometimes</p>
			<h2>Interests</h2>
			<p>text bloxk here</p>
		</div>
	)
}
