import React from 'react'
import Header from './Components/Header'
import Tile from './Components/Tiles'
import tileData from './Data/data'

export default function App(){
	const Tiles = tileData.map(function(tile) {
		return (
			<Tile 
				{...tile}
			/>
		)
	})
	return(
		<div>
			<Header />
			<div className='tilesList'>
				{Tiles}
			</div>
		</div>
	)
}
