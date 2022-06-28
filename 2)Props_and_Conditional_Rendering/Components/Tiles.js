import React from 'react'

export default function Tiles(props){
	let Image = `./Images/${props.imageUrl}`
	let badgeText
	if (props.location !== 'USA'){
		badgeText = props.location	
	}
	return (
		<section className='Tile'>
			{badgeText && <div className='card-badge'>{badgeText}</div>}	
			<img src={Image} alt=' ' />
			<div>
				<h2>{props.location}</h2>
				<a href={props.googleMapsUrl}>View On Google Maps</a>
				<h1>{props.title}</h1>
				<h4>{props.startDate} - {props.startDate}</h4>
				<p>{props.description}</p>
			</div>
		</section>	
	)
}
