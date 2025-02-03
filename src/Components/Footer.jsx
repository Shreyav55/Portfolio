
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        {/* <div className="footer top">
            <div className="footer-top-left">
                <img src='' alt='' />
                <p>i am a web developer</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src='' alt='' />
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div> */}
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Shreya Vishwakarma. All rights reserved. </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>

            </div>
        </div>

    </div>
  )
}

export default Footer