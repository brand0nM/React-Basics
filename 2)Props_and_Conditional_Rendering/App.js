import React from 'react'
import NavBar from './Components/NavBar' 
import Hero from './Components/Hero'
import Card from './Components/Card'
import cardData from './Data/data'

export default function app() {
	const Cards = cardData.map(function(card){
		return(
			<Card
				{...card}
			/>
		)
	})

	return(
		<div>
			<NavBar />
			<Hero />
			<section className="cards-list">
				{Cards}
			</section>
		</div>
	)
}
