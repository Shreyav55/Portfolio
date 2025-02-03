// import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/Profile.img.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I am Shreya Vishwakarma,</span> Web Developer</h1>
        <p> I am a passionate web developer with experience in HTML, CSS, JavaScript, and Java. I have completed a web development internship and am currently learning React.js to enhance my skills. With a strong problem-solving mindset and a can-do attitude, I thrive in collaborative environments and aim to secure a well-paid internship leading to a full-time opportunity.</p>
        <div className='hero-action'>
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me </AnchorLink> </div>
            <div className='hero-resume'>
            <a 
        href="https://drive.google.com/file/d/1g8eVXqqen41yHbIZvwQWFW0-_W_wkciX/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }} >
               My Resume </a>
               </div>
        </div>
    </div>
  )
}

export default Hero