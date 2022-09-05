import React from 'react'
import glob from '../assets/images/worldmap2.png'
import PublicIcon from '@mui/icons-material/Public';
// import Navbar from './navbar'
import '../assets/css/intro.css'
export default function Intro() {
  return (
    <div className="main">
        <div className="intro">
            <div className="introleft">
                <div className="introcard">
                <div className="introtitle">
                <h1 >  Global Technical Solution</h1>
                <p>Stuck At Problem Here's The Solution</p>
                </div>
                <div className="joinform">
                    <input type="text" placeholder='Email address'  />
                    <button>
                        Sbuscibe
                    </button>
                </div>
                </div>
            </div>
            <div className="introright">
                <img src={glob} alt="glob image" />
            </div>
        </div>
    </div>
  )
}
