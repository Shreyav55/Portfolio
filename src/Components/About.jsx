import About_img from '../assets/About2.img.jpg'

import './About.css'
const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            
        </div>
        <div className="about-sections">
            <div className='about-left'>
                <img src={About_img} alt='' />
                <br></br>
                <div className="about-skills"><h2> SKILLS</h2>
                    <div className="about-skill"><p> HTML & CSS</p> <hr style={{width:"50%"}}/> </div>
                    <div className="about-skill"><p> JavaScript</p> <hr style={{width:"50%"}}/> </div>
                    <div className="about-skill"><p> Java</p> <hr style={{width:"50%"}}/> </div>
                    <div className="about-skill"><p> React.js</p> <hr style={{width:"50%"}}/> </div>
                    <div className="about-skill"><p> Node.js</p> <hr style={{width:"50%"}}/> </div>
                    <div className="about-skill"><p> Express.js</p> <hr style={{width:"50%"}}/> </div>
                    <div className="about-skill"><p> SQL</p> <hr style={{width:"50%"}}/> </div>
                    <div className="about-skill"><p> MongoDB</p> <hr style={{width:"50%"}}/> </div>
                </div>
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p>I am a passionate web developer with a strong foundation in HTML, CSS, JavaScript, and React.js. With experience in building dynamic and responsive websites, I love turning ideas into functional and visually appealing applications.

I have a solid understanding of Data Structures and Algorithms (DSA) and Java programming, which helps me write efficient and optimized code. My recent projects showcase my ability to build interactive web applications, including a quiz app powered by APIs.

</p>
                    <p>I am a confident and hardworking person who thrives in collaborative environments. I bring a can-do attitude, adaptability, and problem-solving skills to every project. Currently, I am focused on mastering React.js and expanding my expertise in modern web development.</p>

                </div>
                <br/>
                <div className='education'>
                    <h2> EDUCATION</h2>
                    <br/>
                    <p> Jabalpur Engineering College </p>
                    
                   <p> 2022 - 2026</p>
                   
                   <p> Bachelor in Mechatronics Engineering </p>
                </div>
                <br/>
                <div className='internship'> 
                    <h2> INTERNSHIP</h2>
                    <br/>
                    <p> Cloud Counselage Pvt. Ltd.</p>
                    <p> Feb-2024 - Mar-2024</p>
                    <p> During my internship at Cloud Counselage Pvt Ltd, I gained valuable experience in web development. I contributed to the development of the FutureEdu website, where I was responsible for building and optimizing web pages using HTML, CSS, and JavaScript. I collaborated with a team to ensure a smooth user experience and implemented features that enhanced the website functionality. This experience helped me sharpen my coding skills, improve my problem-solving abilities, and work effectively in a team-oriented environment.</p>
                </div>
                <br></br>
                
                
            </div>

            

        </div>
        
           
            
        </div>
    
  )
}

export default About