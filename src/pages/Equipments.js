import React from 'react'
import { Link } from 'react-router-dom';
import { Link as Scroll} from 'react-scroll';
import yarnBanner from '../assets/images/img_yarn-banner.jpg';
import hookBanner from '../assets/images/img_hooks.jpg';
import peripheralsBanner from '../assets/images/img_peripherals-banner.jpg'
import size0 from '../assets/images/img_size-0.jpg'
import size1 from '../assets/images/img_size-1.jpg'
import size2 from '../assets/images/img_size-2.jpg'
import size3 from '../assets/images/img_size-3.jpg'
import size4 from '../assets/images/img_size-4.jpg'
import size5 from '../assets/images/img_size-5.jpg'
import size6 from '../assets/images/img_size-6.jpg'
import size7 from '../assets/images/img_size-7.jpg'
import aluminumHook from '../assets/images/img_aluminum-hooks.jpg'
import steelHook from '../assets/images/img_steel-hooks.webp'
import plasticHook from '../assets/images/img_plastic-hooks.jpg'
import woodHook from '../assets/images/img_wood-hooks.webp'
import yarnCutter from '../assets/images/img_yarn-cutter.webp'
import stitchMarkers from '../assets/images/img_stitch-marker.webp'
import rowCounter from '../assets/images/img_row-counter.jpg'
import hookGauge from '../assets/images/img_hook-gauge.jpg'
import '../styles/Equipments.css';

function Equipments() {
  return (
    <div className='equipments'>
        <div className='introduction'>
            <div className='leftSide'>
                <h1>Crocheting Equipments</h1>
                <p className='briefD'>There are many different types of equipment or materials that are used in crocheting. This resource will provide an overview of the most commonly used tools needed to create your favourite crochet pattern!</p>
            </div>
            <div className='rightSide'>
                <p>Jump to Each Section</p>
                <div className='navigator'>
                    <Scroll to='yarn-equipment' smooth={true} duration={500} offset={-80} spy={true}>I. Yarns</Scroll>
                    <Scroll to='hook-equipment' smooth={true} duration={500} offset={-80} spy={true}>II. Hooks</Scroll>
                    <Scroll to='peripherals-equipment' smooth={true} duration={500} offset={-80} spy={true}>III. Peripherals</Scroll>
                </div>
            </div>
        </div>
        <div className='content'>
            <div className='yarn-equipment'>
                <div className='banner'>
                    <img src={yarnBanner} alt='Yarn Banner' className='banner' />
                    <h1 className='equipment-title'>Yarn</h1>
                </div>
                <p className='equipment-description'>It is main material used in crochet. It comes in a wide range of colors, textures, and weights. Some of the most common yarn sizes or weights are:</p>
                <div className='variance'>  
                    <div className='mainbar'>
                        <h2>Size 0: Lace or Thread</h2>
                        <p>It is the heaviest weight category available and produces quick and cozy projects. Jumbo yarn is perfect for creating warm and snuggly items such as oversize blankets, thick scarves, and chunky cowls. It has a gauge of approximately 6 stitches below per 4 inches (10 centimeters) using a large to extra-large-sized hook.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                    <div className='sidebar'>
                        <img src={size0} alt='Size 0 Yarn'></img>
                    </div>
                </div>
                <div className='variance'>  
                    <div className='mainbar'>
                        <h2>Size 1: Fingering or Sock</h2>
                        <p>Fingering weight yarn is slightly thicker than lace weight. It is commonly used for lightweight garments, socks, shawls, and accessories. It has a gauge of approximately 27-32 stitches per 4 inches (10 centimeters) using a small to medium-sized hook.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                    <div className='sidebar'>
                        <img src={size1} alt='Size 1 Yarn'></img>
                    </div>
                </div>
                <div className='variance'>  
                    <div className='mainbar'>
                        <h2>Size 2: Sport or Baby</h2>
                        <p>Sport weight yarn is a lightweight option suitable for baby items, lightweight garments, and accessories. It has a gauge of approximately 23-26 stitches per 4 inches (10 centimeters) using a medium-sized hook.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                    <div className='sidebar'>
                        <img src={size2} alt='Size 2 Yarn'></img>
                    </div>
                </div>
                <div className='variance'>  
                    <div className='mainbar'>
                        <h2>Size 3: DK or Light Worsted</h2>
                        <p>DK or light worsted yarn is ideal for creating lightweight and comfortable garments, such as sweaters, cardigans, hats, and scarves. It's also commonly used for baby items, blankets, shawls, and accessories. It has a gauge of approximately 21 - 24 stitches per 4 inches (10 centimeters) using a medium-sized hook.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                    <div className='sidebar'>
                        <img src={size3} alt='Size 3 Yarn'></img>
                    </div>
                </div>
                <div className='variance'>  
                    <div className='mainbar'>
                        <h2>Size 4: Worsted or Aran</h2>
                        <p>Worsted weight yarn is a medium-weight yarn widely used for a variety of projects. It is versatile and works well for scarves, sweaters, blankets, and home decor items. It has a gauge of approximately 16-20 stitches per 4 inches (10 centimeters) using a medium-sized hook.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                    <div className='sidebar'>
                        <img src={size4} alt='Size 4 Yarn'></img>
                    </div>
                </div>
                <div className='variance'>  
                    <div className='mainbar'>
                        <h2>Size 5: Bulky or Chunky</h2>
                        <p>Bulky weight yarn is thicker and heavier, making it ideal for quick projects like hats, scarves, and blankets. It has a gauge of approximately 12-15 stitches per 4 inches (10 centimeters) using a large-sized hook.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                    <div className='sidebar'>
                        <img src={size5} alt='Size 5 Yarn'></img>
                    </div>
                </div>
                <div className='variance'>  
                    <div className='mainbar'>
                        <h2>Size 6: Super Bulky or Super Chunky</h2>
                        <p>Super bulky weight yarn is extremely thick and chunky, creating cozy and warm projects. It is perfect for chunky scarves, blankets, and accessories. It has a gauge of approximately 7-11 stitches per 4 inches (10 centimeters) using a large to extra-large-sized hook.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                    <div className='sidebar'>
                        <img src={size6} alt='Size 6 Yarn'></img>
                    </div>
                </div>
                <div className='variance'>  
                    <div className='mainbar'>
                        <h2>Size 7: Jumbo or Roving</h2>
                        <p>It is the heaviest weight category available and produces quick and cozy projects. Jumbo yarn is perfect for creating warm and snuggly items such as oversize blankets, thick scarves, and chunky cowls. It has a gauge of approximately 6 stitches below per 4 inches (10 centimeters) using a large to extra-large-sized hook.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                    <div className='sidebar'>
                        <img src={size7} alt='Size 7 Yarn'></img>
                    </div>
                </div>
            </div>
            <div className='hook-equipment'>
                <div className='banner'>
                    <img src={hookBanner} alt='Hook Banner' className='banner' />
                    <h1 className='equipment-title'>Hooks</h1>
                </div>
                <p className='equipment-description'>Crochet hooks come in many different sizes, usually measured in millimeters. However, they also have a corresponding letter or number size that may vary. Hook sizes may be chosen for different purposes and may also depend on the yarn weight to be used. Below is a table of the most common hook sizes.</p>
                    <div className='table-container'>
                        <table className='table-1' cellspacing='0'>
                            <tr className='row-title'>
                                <th>Milimiter Size</th>
                                <th>US Size</th>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>2.25mm</p></td>
                                <td><p className='element'>B - 1</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>2.5mm</p></td>
                                <td><p className='element'>--</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>2.75mm</p></td>
                                <td><p className='element'>C - 2</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>3.125mm</p></td>
                                <td><p className='element'>D</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>3.25mm</p></td>
                                <td><p className='element'>D - 3</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>3.5mm</p></td>
                                <td><p className='element'>E - 4</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>3.75mm</p></td>
                                <td><p className='element'>F - 5</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>4mm</p></td>
                                <td><p className='element'>G - 6</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>4.25mm</p></td>
                                <td><p className='element'>G</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>4.5mm</p></td>
                                <td><p className='element'>7</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>5mm</p></td>
                                <td><p className='element'>H - 8</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>5.25mm</p></td>
                                <td><p className='element'>I</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>5.5mm</p></td>
                                <td><p className='element'>I - 9</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>5.5mm</p></td>
                                <td><p className='element'>J</p></td>
                            </tr>
                        </table>
                        <table className='table-2' cellspacing='0'>
                            <tr className='row-title'>
                                <th>Milimiter Size</th>
                                <th>US Size</th>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>6mm</p></td>
                                <td><p className='element'>J - 10</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>6.5mm</p></td>
                                <td><p className='element'>K - 10 1/2</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>7mm</p></td>
                                <td><p className='element'>--</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>8mm</p></td>
                                <td><p className='element'>L - 11</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>9mm</p></td>
                                <td><p className='element'>M/N - 13</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>10mm</p></td>
                                <td><p className='element'>N/P - 15</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>11.5</p></td>
                                <td><p className='element'>P - 16</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>12mm</p></td>
                                <td><p className='element'>--</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>15mm</p></td>
                                <td><p className='element'>P/Q</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>15.75mm</p></td>
                                <td><p className='element'>Q</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>16mm</p></td>
                                <td><p className='element'>Q</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>19mm</p></td>
                                <td><p className='element'>S</p></td>
                            </tr>
                            <tr className='row-even'>
                                <td><p className='element'>25mm</p></td>
                                <td><p className='element'>T/U/X</p></td>
                            </tr>
                            <tr className='row-odd'>
                                <td><p className='element'>30mm</p></td>
                                <td><p className='element'>T/X</p></td>
                            </tr>
                        </table>

                    </div>
                    <p className='equipment-description'>Hooks may also come in different materials.</p>
                <div className='variance'>
                    <div className='sidebar'>
                        <img src={aluminumHook} alt='Aluminum Hook'></img>
                    </div>
                    <div className='mainbar'>
                        <h2>Aluminum</h2>
                        <p>Aluminum hooks are lightweight and have a smooth surface that allows yarn to glide easily. They are widely available, affordable, and great for general-purpose crochet projects.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                </div>
                <div className='variance'>
                    <div className='sidebar'>
                        <img src={steelHook} alt='Steel Hook'></img>
                    </div>
                    <div className='mainbar'>
                        <h2>Steel</h2>
                        <p>Steel hooks are typically used for working with thinner yarn weights, such as lace or thread. They are known for their fine, slender design and are commonly used in delicate projects like doilies or fine garments.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                </div>
                <div className='variance'>
                    <div className='sidebar'>
                        <img src={plasticHook} alt='Plastic Hook'></img>
                    </div>
                    <div className='mainbar'>
                        <h2>Plastic</h2>
                        <p>Plastic hooks are lightweight, inexpensive, and often preferred by beginners due to their affordability and comfortable grip. They are gentle on the hands and work well with most yarn types</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                </div>
                <div className='variance'>
                    <div className='sidebar'>
                        <img src={woodHook} alt='Wood Hook'></img>
                    </div>
                    <div className='mainbar'>
                        <h2>Wood</h2>
                        <p>Wooden hooks provide a warm and natural feel. They are smooth, lightweight, and have a comfortable grip. Wood hooks are particularly suitable for those who prefer a natural and ergonomic crochet experience.</p>
                        <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                        </Link>
                    </div>    
                </div>
                
            </div>
            <div className='peripherals-equipment'>
                <div className='banner'>
                    <img src={peripheralsBanner} alt='Peripheral Banner' className='banner' />
                    <h1 className='equipment-title'>Peripherals</h1>
                </div>
                <p className='equipment-description'>It is main material used in crochet. It comes in a wide range of colors, textures, and weights. Some of the most common yarn sizes or weights are:</p>
                <div className='peripherals-boxes'>
                    <div className='withButton'>
                    <div className='peripherals-box'>
                        <div className='peripherals-text'>
                        <h1 className='peripherals-title'>Yarn Cutter</h1>
                        <p className='peripherals-description'>A small, sharp and compact tool to cleanly cut the yarn to be used that can fit in a pocket or a bag for when crocheting on the go.</p>
                        </div>
                        <img src= {yarnCutter} alt='Equipments' />

                    </div> 
                    <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                    </Link>
                    </div>
                    <div className='withButton'>
                    <div className='peripherals-box'>
                        <div className='peripherals-text'>
                        <h1 className='peripherals-title'>Stitch Markers</h1>
                        <p className='peripherals-description'>A small crochet accessory that keeps count of stitches and are useful for marking important points as you crochet.</p>
                        </div>
                        <img src= {stitchMarkers} alt='Tutorials' />
                    </div>
                    <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                    </Link>
                    </div>
                    <div className='withButton'>
                    <div className='peripherals-box'>
                        <div className='peripherals-text'>
                        <h1 className='peripherals-title'>Row Counters</h1>
                        <p className='peripherals-description'>A tool that can be used to keep count of the numbers of rows in the piece you are crocheting.</p>
                        </div> 
                        <img src= {rowCounter} alt='Patterns' />
                    </div> 

                    <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                    </Link>
                    </div>
                    <div className='withButton'>
                    <div className='peripherals-box'>
                        <div className='peripherals-text'>
                        <h1 className='peripherals-title'>Hook Gauge</h1>
                        <p className='peripherals-description'> A tool that is useful for measuring the thickness of the needles or hooks that you will be using,</p>
                        </div>
                        <img src= {hookGauge} alt='Terms' />
                    </div> 

                    <Link to='https://www.amazon.com/Lion-Brand-Amazing-Lace-Broomstick-Black/dp/B07KCLDX55?ref_=ast_sto_dp' target='.blank' rel='noopener noreferer'>
                            <button className='buy-button'>Buy Here</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Equipments