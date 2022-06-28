import React from 'react'
import Globe from '../Images/globe.png'

export default function Header(){
	return (
		<header>
			<img src={Globe} alt= ' ' className='globe' />
			<h3>my travel journal</h3>
		</header>

	)
}
