
import './Services.css'
import Services_data from '../assets/Services_data.js'
import arrow_icon from '../assets/arrow.png'



const Services = () => {
  return (
    <div id='services' className='Services'>
      <div className="services-title">
        <h1> My Projects</h1>

      </div>
      <br></br>
      <div className = "services-container">
        {Services_data.map((service, index) => {
          return ( <a href={service.href} target="_blank" rel="noopener noreferrer" key={index}>
          <div key={index}className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            
                                
            <p>{service.s_desc}</p>
            
            <div className='service-readmore'> 
              <p>Read More</p>
              <img src={arrow_icon} alt=''/>
            </div>
            </div>
            </a>
          );
        
        })}
      </div>
        
    </div>
  )
}

export default Services