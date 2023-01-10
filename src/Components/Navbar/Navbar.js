import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Avatar from '@mui/material/Avatar';
import mypic from '../../assets/mypic.JPG'
import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
const [click, setClick] = useState (false)
  

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)
const MyAvatar = styled(Avatar) ({
  width: '65px',
  height: '65px',
  marginRight: '10px',
  '@media (max-width: 960px)': {
    width: '45px',
    height: '45px',
    margin: '15px'
  },
})
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <MyAvatar className="avatar" src={mypic} alt="picture of Trish"></MyAvatar>Trish Fox-Collis 
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
              <HashLink smooth to='/#cardsContainer' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </HashLink>
            </li>
            <li className='nav-item'>
              <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
              <li className='nav-item'>
              <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
