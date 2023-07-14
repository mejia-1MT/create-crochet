import React from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import Image1 from '../assets/images/img_polaroid-1.jpg'
import Image2 from '../assets/images/img_polaroid-2.jpg'
import Image3 from '../assets/images/img_polaroid-3.jpg'
import Image4 from '../assets/images/img_polaroid-4.jpg'

function Home() {
  return (
    <div className='home'>
        <div className='headerContainer'>
          <div className='greeting'>
            <h1>Unleash Your Inner Hooker!</h1>
            <p>Get hooked on the art of tangled beauty.</p>
          </div>
      </div>
      <div className='dashboard'>
        <h1 className='welcome'>Welcome to the world of crocheting</h1>
        <div className='boxes'>
          <Link to='/equipments'>
          <div className='box'>
            <div className='text'>
              <h1 className='title'>Learn about the basic crochet equipments</h1>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante mi, porta a placerat quis, pretium id tortor.</p>
            </div>
            <img src= {Image1} alt='Equipments' />
          </div> 
          </Link>
          <Link to='/tutorials'>
          <div className='box'>
            <div className='text'>
              <h1 className='title'>Dive into various tutorials </h1>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante mi, porta a placerat quis, pretium id tortor.</p>
            </div>
            <img src= {Image2} alt='Tutorials' />
          </div>
          </Link>
          <Link to='/patterns'>
          <div className='box'>
            <div className='text'>
              <h1 className='title'>Explore a library of patterns</h1>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante mi, porta a placerat quis, pretium id tortor.</p>
            </div> 
            <img src= {Image3} alt='Patterns' />
          </div> 
          </Link>
          <Link to='/terms'>
          <div className='box'>
            <div className='text'>
              <h1 className='title'>Familiarize yourself with crochet slang and terminology</h1>
              <p className='description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante mi, porta a placerat quis, pretium id tortor.</p>
            </div>
            <img src= {Image4} alt='Terms' />
          </div> 
          </Link>
        </div>
      </div>
    </div>
    
  )
  
}

export default Home;