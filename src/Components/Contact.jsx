import './Contact.css'
import mail_icon from '../assets/mail.png'
import location_icon from '../assets/location.png'
import call_icon from '../assets/call.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1200bd49-407f-4cd9-9e81-f243ce9a1f40");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in Touch</h1>
            
        </div>
        <div className="contact-section">
            <div className='contact-left'>
                <h1>Lets talk</h1>
                <p>I m currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>shreyavishwakarma171@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+919770087455</p>
                        </div>
                        <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Jabalpur, Madhya Pradesh, India</p>
                        </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label htmlFor=''>Your Email</label> 
                <input type='Email' placeholder='Enter your email' name='email'/>
                <label htmlFor=''>Write your message here</label>
                <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact