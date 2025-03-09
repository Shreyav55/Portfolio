// import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/Profile.img.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I am Shreya Vishwakarma,</span> Web Developer</h1>
        <p>I am a passionate MERN stack developer with expertise in React.js, Node.js, JavaScript, HTML, CSS, Java, and DSA. I have hands-on experience in building web applications and have completed internships, including working on the FutureEdu website. Currently, I am seeking a web development internship to apply my skills and grow as a developer.</p>
        <div className='hero-action'>
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me </AnchorLink> </div>
            <div className='hero-resume'>
            <a 
        href="https://drive.google.com/file/d/1cVS5TeAeiQjI-80lEOaDmOHEr8__xEeM/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }} >
               My Resume </a>
               </div>
        </div>
    </div>
  )
}

export default Hero