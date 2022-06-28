import React from 'react'

export default function Tiles(props){
	let Image = `./Images/${props.imageUrl[0]}`
	let badgeText
	if (props.location !== 'USA'){
		badgeText = 'Over Seas'	
	}
	return (
		<section>
			{badgeText && <div className='card-badge'>{badgeText}</div>}	
			<img src={Image} alt=' ' className='tileImage' />
			<div>
				<h1 className='location'>
					<span className='city'> {props.title}</span>, {props.location}
				</h1>
				<h4 className='date'>{props.startDate} - {props.endDate}</h4>
				<a href={props.googleMapsUrl}>View On Google Maps</a>
				<p className='description'>{props.description}</p>
			</div>
		</section>	
	)
}
