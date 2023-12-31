import React from 'react';
import LogoG from '../assets/images/title.png';
import LoginLogo from '../assets/images/log-in-logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {

  return (
    <div className='navbar'>
        <div className='leftSide'>
            <Link to='/create-crochet'><img src={LogoG} alt='Logo'/></Link>
        </div>
        <div className='rightSide'>
            <Link to='/equipments'>Equipments</Link>
            <Link to='/tutorials'>Tutorials</Link>
            <Link to='/patterns'>Patterns</Link>
            <Link to='/terms'>Terms to Know</Link>
            <Link to='/login'><img src={LoginLogo} alt='Login logo' />Login</Link> 

        </div>
    </div>
  )
}

export default Navbar
