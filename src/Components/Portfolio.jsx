import {MediaData} from '../assets/MediaData'
import './Portfolio.css'
const Portfolio = () => {
  return (
    <div id='portfolio' className= "portfolio">
        <div className='flex-space-x'>
            {
                MediaData.map((item, index) => {
                    return (
                        <div className='portfolio-img' key={index}>
                            <a href={item.href} target='_blank'>
                                <img src={item.img} alt='media' className='h-28'/>
                                </a> 

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Portfolio