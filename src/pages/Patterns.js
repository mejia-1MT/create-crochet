import React from 'react'
import { Link } from 'react-router-dom'
import { Link as Scroll} from 'react-scroll';
import blanket from '../assets/images/patterns/img_blanket.jpg'
import cardigan from '../assets/images/patterns/img_cardigan.jpg'
import bee from '../assets/images/patterns/img_bee.jpg'
import tote from '../assets/images/patterns/img_tote.jpg'
import top from '../assets/images/patterns/img_top.jpg'
import beanie from '../assets/images/patterns/img_beanie.jpg'
import frog from '../assets/images/patterns/img_frog.jpg'
import dreamCatcher from '../assets/images/patterns/img_dream-catcher.jpg'
import halter from '../assets/images/patterns/img_halter-top.jpg'
import '../styles/Patterns.css'

function Patterns() {
  return (
    <div className='patterns'>
        <div className='patterns-introduction'>
            <div className='patterns-leftSide'>
                <h1>Tutorials: A Guide for Beginners</h1>
                <p className='patterns-briefD'>Crocheting is a versatile and creative craft that uses a hook and yarn to create beautiful fabric and textured designs. With a simple tool and endless possibilities, crocheting allows you to explore various stitches, patterns, and techniques to bring your ideas to life. The art of crochet is a wonderful hobby to get into and in this guide, you will be able to take your first steps in this craft or use it as a way to refresh and expand your skills as an experienced crocheter. </p>
            </div>
            <div className='patterns-rightSide'>
                <p>Jump to Each Section</p>
                <div className='patterns-navigator'>
                    <Scroll to='patterns-video-section' smooth={true} duration={500} offset={-80} spy={true}>I. The Basic Crochet Stitches</Scroll>
                    <Scroll to='patterns-pdf-section' smooth={true} duration={500} offset={-80} spy={true}>II. Joining Yarns and Changing Colors</Scroll>
                   
                </div>
            </div>
        </div>
        <div className='patterns-section'>
          <div className='patterns-video-section'>
            <div className='patterns-section-title'>
                <h1>Patterns with Video Tutorials</h1>
                <p>Below is a resource of crochet projects that you can follow along with the help of step-by-step video tutorials!</p>
            </div>
            <div className='patterns-video-content'>
              <div className='video-content-variance'>
                <h2>Baby Jellyfish Amigurumi</h2>
                <div className='video-variance-container'>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/voc6PtZhms8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
              <div className='video-content-variance'>
                <h2>Baby Seal Amigurumi</h2>
                <div className='video-variance-container'>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hlPHXrA2Qqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
              <div className='video-content-variance'>
                <h2>Cardigan</h2>
                <div className='video-variance-container'>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EhtD0tcqc6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
              <div className='video-content-variance'>
                <h2>Fishnet Sleeves</h2>
                <div className='video-variance-container'>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ycGXn27hSeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
              <div className='video-content-variance'>
                <h2>Gingham Totebag</h2>
                <div className='video-variance-container'>
                  <iframe iframe width="100%" height="100%" src="https://www.youtube.com/embed/FLKGnu-jv8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
              <div className='video-content-variance'>
                <h2>Bucket Hat</h2>
                <div className='video-variance-container'>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ps7lSAG1nIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
              <div className='video-content-variance'>
                <h2>Coin Purse</h2>
                <div className='video-variance-container'>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dL7SrXMR-kU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
              <div className='video-content-variance'>
                <h2>Flower Coaster</h2>
                <div className='video-variance-container'>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ycGXn27hSeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className='patterns-pdf-section'>
            <div className='patterns-section-title'>
                <h1>Patterns with Video Tutorials</h1>
                <p>Below is a resource of crochet projects that you can follow along with the help of step-by-step video tutorials!</p>
            </div>
            <div className='patterns-pdf-content'>
              <div className='pdf-content-variance'>
              <Link to='https://www.lovecrafts.com/en-gb/p/zig-zag-blanket-crochet-pattern-by-sweet-crocheterie' target ='.blank'>
                  <img src={blanket} alt='Halter'></img>
                  <h2>Zig Zag Blanket</h2>
              </Link>
              </div>
              <div className='pdf-content-variance'>
              <Link to='https://www.lovecrafts.com/en-gb/p/beginner-crochet-cardigan-crochet-pattern-by-little-golden-nook' target='.blank'>
                  <img src={cardigan} alt='Cardigan'></img>
                  <h2>Beginner Crochet Cardigan</h2>
              </Link>  
              </div>
              <div className='pdf-content-variance'>
              <Link to='https://www.lovecrafts.com/en-gb/p/honey-bee-crochet-pattern-by-studio-milanina' target='.blank'>
                  <img src={bee} alt='Honey Bee'></img>
                  <h2>Honey Bee</h2>
              </Link>
              </div>
              <div className='pdf-content-variance'>
                <Link to='https://www.lovecrafts.com/en-gb/p/sakura-market-bag-crochet-pattern-by-kame-crochet' target='.blank'>
                  <img src={tote} alt='Market Bag'></img>
                  <h2>Sakura Market Bag</h2>
                </Link>
              </div>
              <div className='pdf-content-variance'>
                <Link to='https://www.lovecrafts.com/en-gb/p/the-iris-crop-top-crochet-pattern-by-calm-homemade' target='.blank'>
                  <img src={top} alt='Top'></img>
                  <h2>The Irish Crop Top</h2>
                </Link>
              </div>
              <div className='pdf-content-variance'>
                <Link to='https://www.lovecrafts.com/en-gb/p/easy-winter-beanie-crochet-pattern-by-sarah-thompson' target='.blank'>   
                  <img src={beanie} alt='Beanie'></img>
                  <h2>Easy White Beanie</h2>
                </Link>
              </div>
              <div className='pdf-content-variance'>
              <Link to='https://www.lovecrafts.com/en-gb/p/crochet-pride-frog-crochet-pattern-by-amy-gaines' target='.blank'>
                  <img src={frog} alt='Frog'></img>
                  <h2>Crochet Pride Frog</h2>
              </Link>
              </div>
              <div className='pdf-content-variance'>
              <Link to='https://www.lovecrafts.com/en-gb/p/star-dreamcatcher-crochet-pattern-by-renata-saj' target='.blank'>
                <img src={dreamCatcher} alt='Dream Catcher'></img>
                <h2>Star Dream Catcher</h2>
              </Link>
              </div>
              <div className='pdf-content-variance'>
              <Link to='https://www.lovecrafts.com/en-gb/p/hepatica-granny-top-crochet-pattern-by-hooked-by-anna' target='.blank'>
                  <img src={halter} alt='Halter'></img>
                  <h2>Hepatica Granny Top</h2>
              </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Patterns