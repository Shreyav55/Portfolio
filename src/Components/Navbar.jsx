import  { useState, useRef} from 'react';
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import underline from '../assets/underline.png'
import menu_open from '../assets/image.png'
import menu_close from '../assets/cross.png'


const Navbar = () => {
  const [menu,setMenu] = useState("");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }


  return (
    <div className='navbar'>
        <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close } onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link'  href='#home'> <p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu ==="home"? <img src="" alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>{menu ==="about"? <img src="" alt=''/>:<></>}</li>  

            <li><AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={()=> setMenu("services")}>Project</p></AnchorLink>{menu ==="services"? <img src="" alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'> <p onClick={()=> setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu ==="portfolio"? <img src="" alt=''/>:<></>}</li>  
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'>  <p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu ==="contact"? <img src="" alt=''/>:<></>}</li>  
            </ul>
            <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact' > Connect With Me </AnchorLink></div>
    </div>
  )
}

export default Navbar