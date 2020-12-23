import React, { useState } from 'react'
import ShowMenuButton from '../../atoms/ShowMenuButton'
import NavbarLarge from '../../molecules/NavbarLarge'
import NavbarMedium from '../../molecules/NavbarMedium'
import './Navbar.css'
import '../../../App.css'

function Navbar() {

    const [show, setShow] = useState(false)

    return (
        <>
            <nav>  
                <div className='logo'> Visual language </div>
                <ul 
                    className='nav-links'
                    style={{ transform: show ? 'translateX(0px)' : '' }}
                > 
                    { 
                        (window.innerWidth > 1024) 
                        ? <NavbarLarge />
                        :
                        (window.innerWidth < 600) 
                        ? <NavbarLarge />
                        : <NavbarMedium />
                    }
                </ul>
                <li onClick={ () => setShow(!show) }>
                    <ShowMenuButton />
                </li>
            </nav>
        </>
    )
}

export default Navbar
