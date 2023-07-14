import React from 'react'
import { Link } from 'react-router-dom';
import LogoW from '../assets/images/title-white.png';
import ig from '../assets/images/img_ig-icon.png';
import pinterest from '../assets/images/img_pinterest-icon.png';
import fb from '../assets/images/img_fb-icon.png';
import '../styles/Footer.css';

function Foother() {
  return (
    <div className='footer'>
        <div className='leftSide'>
            <Link to='/' ><img src={LogoW} alt='logo' className='title'/></Link>
            <p className='message'>Hello and welcome to The Crochet Corner. Get ready to be inspired, learn, and connect. Happy crocheting!</p>
            <p className='advertise'>Feel free to connect with our socials!</p>
            <div className='socials'>   
                <Link to='/'><img src={ig} alt='fb' /></Link>
                <Link to='/'><img src={pinterest} alt='fb' /></Link>
                <Link to='/'><img src={fb} alt='fb' /></Link>
            </div>
        </div>
        <div className='rightSide'>
            <p className='signUpText'>Sign up to our Newsletter!</p>
            <Link to='/login'>
            <input type='text' placeholder='  example@emailaddress.com'></input>
            </Link>
        </div>
    </div>
  )
}

export default Foother