import React from 'react'
import Photo from './Images/profile.jpeg'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'

export default function Page(){
	return(
		<div className='pageTainer'>
			<img src={Photo} alt=' ' className='profilePic'/>
			<MainContent />
			<Footer />
		</div>
	)
}
