import React from 'react'
import '../assets/css/carrier.css'
import img from '../assets/images/carrierteam.png'

export default function Carrier() {
  return (
    <div className="carrier">
        <div className="carriercard">
          <div className="carrierleft">
            <div className='carriertitle'>
            <h1>We<span className='bluecolor'>'</span>re <br/> <span className='bluecolor'>hi</span><span>ring</span></h1>
            </div>
            <div className="carrierdetail">
              <h3>Software Development <span className="bluecolor">intern</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, provident?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur hic corrupti quisquam, doloribus itaque explicabo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quae?</p>
            </div>
          </div>
          <div className="carrierright">
          <h1>Start working with <span className="bluecolor">Us</span></h1>
          <img src={img} alt="" />
          <button className="startcarrier">
            Start Carrier
          </button>
          </div>
        </div>
    </div>
  )
}
