import React from 'react'
import { Link } from 'react-router-dom'
import { Link as Scroll} from 'react-scroll';
import '../styles/Tutorials.css'

function Tutorials() {
  return (
    <div className='tutorials'>
        <div className='introduction'>
            <div className='leftSide'>
                <h1>Tutorials: A Guide for Beginners</h1>
                <p className='briefD'>Crocheting is a versatile and creative craft that uses a hook and yarn to create beautiful fabric and textured designs. With a simple tool and endless possibilities, crocheting allows you to explore various stitches, patterns, and techniques to bring your ideas to life. The art of crochet is a wonderful hobby to get into and in this guide, you will be able to take your first steps in this craft or use it as a way to refresh and expand your skills as an experienced crocheter. </p>
            </div>
            <div className='rightSide'>
                <p>Jump to Each Section</p>
                <div className='tutorials-navigator'>
                    <Scroll to='yarn-equipment' smooth={true} duration={500} offset={-80} spy={true}>I. The Basic Crochet Stitches</Scroll>
                    <Scroll to='yarn-equipment' smooth={true} duration={500} offset={-80} spy={true}>II. Joining Yarns and Changing Colors</Scroll>
                </div>
            </div>
        </div>
        <div className='redirection-message-out'><Link><i>Want to know more about the equipment needed to start crocheting? Check out our equipment article!</i></Link></div>
        <div className='tutorial-section'>
            <div className='tutorial-section-title'>
                <h1>Basic Crochet Stiches</h1>
                <div className='redirection-message'><Link><i>If you want to familiarize yourself with the terminologies of the basic crochet stitches, check out our terminologies article!</i></Link></div>
                <p>To get started, you will have to learn the most basic crochet stitches which are the foundation for creating a wide range of crochet projects. Here are the fundamental stitches to get you started:</p>
            </div>
            <div className='tutorial-section-content'>
                <div className='tutorial-content-variance'>
                    <h2>Chain Stich (ch)</h2>
                    <p>It is often the starting point for creating crochet projects. The chain stitch forms a series of interlocking loops, providing the foundation for subsequent stitches.</p>
                    <p>To make a chain stitch:</p>
                    <ol>
                        <li>Begin with a slipknot on your crochet hook.</li>
                        <li>Hold the slipknot in your non-dominant hand and the hook in your dominant hand.</li>
                        <li>Yarn over (bring the yarn over the hook from back to front).</li>
                        <li>Using the hook, draw the yarn through the slipknot, creating a new loop on the hook.</li>
                        <li>Repeat steps 3 and 4 for the desired number of chain stitches, pulling the yarn through each loop to create a chain.</li>
                    </ol>
                    <p>Below is a video tutorial on how to do a chain stitch:</p>
                    <div className='tutorial-video-container'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/o-Il8OcNAZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='tutorial-content-variance'>
                    <h2>Single Crochet (sc)</h2>
                    <p>The single crochet (abbreviated as sc) is a basic crochet stitch that creates a dense and sturdy fabric. It is one of the fundamental stitches used in crochet projects.</p>
                    <p>To make a single crochet stitch:</p>
                    <ol>
                        <li>Insert your crochet hook into the designated stitch or space.</li>
                        <li>Yarn over (bring the yarn over the hook from back to front).</li>
                        <li>Draw the yarn through the stitch, creating two loops on your hook.</li>
                        <li>Yarn over again.</li>
                        <li>Pull the yarn through both loops on the hook.</li>
                    </ol>
                    <p>Below is a video tutorial on how to do a singe double crochet:</p>
                    <div className='tutorial-video-container'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ik-GSXWoSak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='tutorial-content-variance'>
                    <h2>Half Double Crochet (hdc)</h2>
                    <p>The half double crochet (abbreviated as hdc) is a crochet stitch that falls in between the height of a single crochet and a double crochet. It creates a slightly taller stitch and is used to add texture and depth to crochet projects.</p>
                    <p>To make a half double crochet stitch:</p>
                    <ol>
                        <li>Yarn over (bring the yarn over the hook from back to front).</li>
                        <li>Insert your hook into the designated stitch or space.</li>
                        <li>Yarn over again.</li>
                        <li>Draw the yarn through the stitch, creating three loops on your hook.</li>
                        <li>Yarn over once more.</li>
                        <li>Pull the yarn through all three loops on the hook.</li>
                    </ol>
                    <p>Below is a video tutorial on how to do a half double crochet:</p>
                    <div className='tutorial-video-container'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7VuOIpRO6PM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='tutorial-content-variance'>
                    <h2>Double Crochet (dc)</h2>
                    <p>The double crochet (abbreviated as dc) is a commonly used crochet stitch that creates a taller and more open fabric compared to single and half double crochet stitches. It is versatile and can be used in a wide range of crochet projects.</p>
                    <p>To make a double crochet stitch:</p>
                    <ol>
                        <li>Yarn over (bring the yarn over the hook from back to front).</li>
                        <li>Insert your hook into the designated stitch or space.</li>
                        <li>Yarn over again.</li>
                        <li>Draw the yarn through the stitch, creating three loops on your hook.</li>
                        <li>Yarn over once more.</li>
                        <li>Pull the yarn through the first two loops on the hook.</li>
                        <li>Yarn over again.</li>
                        <li>Pull the yarn through the remaining loops on the hook.</li>
                    </ol>
                    <p>Below is a video tutorial on how to do a half double crochet:</p>
                    <div className='tutorial-video-container'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5xKssKskNzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className='tutorial-section-title'>
                <h1>Joining Yarns and Changing Colors</h1>
                <p>There may be times where while you are working on a project, you find yourself in the dilemma of having to add more yarn to what you are currently crocheting, or perhaps you want to change the yarn’s colors. When it comes to joining yarns and changing colors in crochet, there are several techniques you can use. Here are three commonly used methods:</p>
            </div>
            <div className='tutorial-section-content'>
                <div className='tutorial-content-variance'>
                    <h2>Knot or Overlap Method</h2>
                    <p>To join a new yarn or change colors using the knot method, you can tie a secure knot with the old and new yarn ends and continue crocheting over the tails, leaving them in place. Alternatively, for the overlap method, you can simply crochet over the tail of the old yarn with the new yarn for a few stitches to secure it.</p>
                    <p>Below is a video tutorial on how to do a knot or overlap method:</p>
                    <div className='tutorial-video-container'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7pr6n4kEFgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='tutorial-content-variance'>
                    <h2>Invisible Join or Russian Join</h2>
                    <p>The invisible join is a technique used to seamlessly join a new yarn or change colors. It involves splitting the plies of the yarn and weaving the ends back into the work using a tapestry needle, creating a smooth and invisible transition.</p>
                    <p>Below is a video tutorial on how to an invisible or russian join:</p>
                    <div className='tutorial-video-container'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nvRoDbpFtXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='tutorial-content-variance'>
                    <h2>Join-As-You-Go</h2>
                    <p>This technique is commonly used for projects that require joining motifs or squares together as you work. Instead of joining the yarn or changing colors at the end, you incorporate the new yarn or color while working the final stitches of a motif, connecting it to the previous motif as you go.</p>
                    <p>Below is a video tutorial on how to join-as-you-go.</p>
                    <div className='tutorial-video-container'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7H0tlhL1A_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>          
            </div>
        </div>
    </div>
  )
}

export default Tutorials