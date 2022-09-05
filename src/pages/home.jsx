import React, {useEffect} from 'react'
import Intro from '../components/intro'
import Missions from '../components/Missions'

import '../assets/css/home.css'
import About from '../components/about'



export default function Home() {
 

  return (
    <div className="home" >
      
    <div><Intro/></div>
    <div id='about'><About/></div>
    <div><Missions title="ondc"/></div>
    <div><Missions title="healthcare"/></div>

    </div>
  )
}


