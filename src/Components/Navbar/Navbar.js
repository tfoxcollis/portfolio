import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import mypic from '../../assets/mypic.JPG'


const Navbar = () => {
const [click, setClick] = useState (false)
  

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Avatar className="avatar" src={mypic} alt="picture of Trish" sx={{ bgcolor: deepPurple[500], width: 75, height: 75, margin: 1}}>T</Avatar>Trish Fox-Collis 
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/denmark' className='nav-links' onClick={closeMobileMenu}>
                Denmark
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/paris' className='nav-links' onClick={closeMobileMenu}>
                Paris
              </Link>
            </li>
              <li className='nav-item'>
              <Link to='/jamaica' className='nav-links' onClick={closeMobileMenu}>
                Jamaica
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
