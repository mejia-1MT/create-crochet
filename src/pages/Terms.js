import React from 'react'
import termsIntroPhoto from '../assets/images/terms/img_firstpic.jpg'
import chain from '../assets/images/terms/img_chain.jpg';
import slipStitch from '../assets/images/terms/img_slipstich.jpg'
import singleCrochet from '../assets/images/terms/img_single-crochet.jpg'
import doubleCrochet from '../assets/images/terms/img_double-crochet.jpg'
import halfDoubleCrochet from '../assets/images/terms/img_half-double.jpg'
import treble from '../assets/images/terms/img_treble-crochet.jpg'
import magicRing from '../assets/images/terms/img_magic-ring.jpg'
import yarnOver from '../assets/images/terms/img_yarn-over.jpg'
import '../styles/Terms.css'

function Terms() {
  return (
    <div className='terms'>
        <div className='terms-introduction'>  
            <div className='terms-introduction-text'>
                <h2>Terms to Know in Crocheting</h2>
                <p>Whether you're a beginner or an experienced crocheter, this comprehensive resource is here to help you master the language of crochet. In this guide, you'll find an alphabetically organized glossary of common crocheting terms, complete with clear explanations, visual examples, and helpful tips. From "chain" and "single crochet" to advanced techniques like "cluster stitch" and "magic ring," we've got you covered. Enhance your skills, decipher patterns with ease, and explore the endless possibilities of crochet. Let's dive into the fascinating world of crocheting terms together!</p> 
            </div>    
            <div className='terms-introduction-img'>
                <img src={termsIntroPhoto} alt='Size 0 Yarn'/>
            </div>
        </div>
        <div className='terminologies'>
            <div className='terms-variance'>  
                <div className='terms-odd-sidebar'>
                    <img src={chain} alt='Chain'></img>
                </div>
                <div className='terms-odd-mainbar'>
                    <h2>Chain (ch)</h2>
                    <p>The foundation stitch that creates a row of loops. It is considered as the basis of almost all crochet patterns. </p>
                    
                </div>    
            </div>
            <div className='terms-variance'>  
                <div className='terms-even-mainbar'>
                    <h2>Slip titch (sl st)</h2>
                    <p>A short, easy stitch used to join rounds or create decorative edges.</p>
                </div>    
                <div className='terms-even-sidebar'>
                    <img src={slipStitch} alt='Slip stitch'></img>
                </div>
            </div>
            <div className='terms-variance'>  
                <div className='terms-odd-sidebar'>
                    <img src={singleCrochet} alt='Chain'></img>
                </div>
                <div className='terms-odd-mainbar'>
                    <h2>Single Crochet (sc)</h2>
                    <p>One the most basic stitches that creates a dense fabric. Very versatile and can be added in rows, joined rounds, spiral rounds.</p>
                    
                </div>    
            </div>
            <div className='terms-variance'>  
                <div className='terms-even-mainbar'>
                    <h2>Double Crochet (dc)</h2>
                    <p>A taller stitch that creates an open, lacy fabric.</p>
                </div>    
                <div className='terms-even-sidebar'>
                    <img src={doubleCrochet} alt='Slip stitch'></img>
                </div>
            </div>
            <div className='terms-variance'>  
                <div className='terms-odd-sidebar'>
                    <img src={halfDoubleCrochet} alt='Chain'></img>
                </div>
                <div className='terms-odd-mainbar'>
                    <h2>Half Double Crochet (hdc)</h2>
                    <p>A stitch that falls between a single crochet and double crochet in height.</p>
                    
                </div>    
            </div>
            <div className='terms-variance'>  
                <div className='terms-even-mainbar'>
                    <h2>Treble Crochet(tr)</h2>
                    <p>A tall stitch that creates an even more open and lacy fabric.</p>
                </div>    
                <div className='terms-even-sidebar'>
                    <img src={treble} alt='Slip stitch'></img>
                </div>
            </div>
            <div className='terms-variance'>  
                <div className='terms-odd-sidebar'>
                    <img src={magicRing} alt='Chain'></img>
                </div>
                <div className='terms-odd-mainbar'>
                    <h2>Magic Ring</h2>
                    <p>A technique used to begin crocheting in the round without a hole at the center.</p> 
                </div>    
            </div>
            <div className='terms-variance'>  
                <div className='terms-even-mainbar'>
                    <h2>Yarn over (yo)</h2>
                    <p>Wrapping the yarn around the hook to create a new loop before working the next stitch.</p>
                </div>    
                <div className='terms-even-sidebar'>
                    <img src={yarnOver} alt='Slip stitch'></img>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Terms