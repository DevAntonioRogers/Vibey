import { NavBarMenuItems } from './NavbarMenuItems';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css'






function Navbar() {

  const [click, setClick] = useState(false)


  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(false)
  }


  return (
    <>
      <nav className='navbar-container'>

        <Link to='/'>
          Vibey
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa-solid fa-x' : 'fa-solid fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          {NavBarMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url} className={item.className} onClick={closeMobileMenu}>
                  <i className={item.icon} />
                  {item.title}
                </NavLink>
              </li>
            )
          })}

        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar;
