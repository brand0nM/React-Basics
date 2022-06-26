import React from 'react'
import facebook from '../Images/Facebook_Icon.png'
import github from '../Images/GitHub_Icon.png'
import instagram from '../Images/Instagram_Icon.png'
import linkedin from '../Images/Linkedin_Icon.png'
import twitter from '../Images/Twitter_Icon.png'


export default function Footer(){
	return(
		<footer>
                       
			<input type='image' src={facebook} alt=' ' />
			<input type='image' src={github} alt=' ' />
			<input type='image' src={instagram} alt=' ' />
			<input type='image' src={linkedin} alt=' ' />
			<input type='image' src={twitter} alt=' ' />
		</footer>
	)
}
