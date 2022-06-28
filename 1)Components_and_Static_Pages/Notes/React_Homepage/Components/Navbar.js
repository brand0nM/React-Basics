import React from 'react'
import Logo from '../Images/logo.svg'

export default function Navbar(){
    return (
        <nav>
            <img src={Logo} alt=' ' className='Logo-pic'/>
            <h3 className='nav-logo_text'>ReactFacts</h3>
            <h4 className='nav-title'>React Course - Project</h4>                        
        </nav>
    )
}