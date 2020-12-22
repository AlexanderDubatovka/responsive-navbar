import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShowMenuButton from '../atoms/ShowMenuButton'
import DropMenu from '../molecules/DropMenu'
import { NavbarSimpleItems } from '../atoms/NavbarSimpleItems'
import ArrowDownNavbar from '../../components/assets/img/arrow_down_navbar.png'
import '../../App.css'

function NavbarLarge() {

    const [show, setShow] = useState(false)

    const [drop, setDrop] = useState(false)
    const [drop2, setDrop2] = useState(false)

    return (
        <>
          <nav>  
              <div className='logo'> Visual language </div>
              <ul 
                className='nav-links'
                style={{ transform: show ? 'translateX(0px)' : '' }}
              >
                  <li onClick={ () => setDrop(!drop) }>
                      <Link to='/'>Components</Link>
                      <img src={ArrowDownNavbar} alt='arrow down navbar' />
                      { drop ? <DropMenu />: null }
                  </li>
                  { NavbarSimpleItems.map((item, index) => {
                        return (
                        <li key={index}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                         )
                        })  
                    }
                    <li onClick={ () => setDrop2(!drop2)}>
                        <Link to='/'>Components 6</Link>
                        <img src={ArrowDownNavbar} alt='arrow down navbar' />
                        { drop2 ? <DropMenu />: null }
                    </li>
              </ul>
              <li onClick={ () => setShow(!show) }>
                <ShowMenuButton />
              </li>
          </nav>
        </>
    )
}

export default NavbarLarge
