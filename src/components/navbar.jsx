import React, {useEffect, useState} from 'react'
import "../assets/css/navbar.css"
import { Link } from 'react-router-dom'
import PublicIcon from '@mui/icons-material/Public';







export default function Navbar() {
  const [classname, setclassname] = useState("navbar")
  useEffect(() => {
    const handleScroll = event => {
      if (window.scrollY >= 10){
       setclassname("navbar hidenav")
      }
      else{
        setclassname("navbar")
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={classname}>
        <div className="navleft">
            <div className="icon">
            <PublicIcon fontSize="large" />
            <span>GTS</span>
            </div>
        </div>
        <div className="navright">
        <Link to="/"  className='navlink' >Home</Link>
        <a href='#about'  className='navlink' >About Us</a>
        <Link to="contact"  className='navlink' >Contact Us</Link>
        <Link to="carrier" className='navlink'  >Carrier</Link>
        
        </div>
    </div>
  )
}


