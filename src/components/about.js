import React from "react";
import "../assets/css/about.css";
import about1 from "../assets/images/aboutus1.gif";
import about2 from "../assets/images/aboutus2.gif";
import about3 from "../assets/images/aboutus3.gif";
import scrolldown from '../assets/images/scrolldown.gif'

export default function About() {
  return (
    <div className="about">
      
      <div className="aboutuscontent">
        <div className="aboutusleft">
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            expedita earum maiores corporis fugiat laboriosam dolorum qui saepe
            repudiandae ducimus.
          </p>
        </div>
        <div className="aboutright">
          <div className="aboutusimage">
            <img src={about3} alt="" />
          </div>
        </div>
      </div>
      <div className="aboutuscontent">
        
        <div className="aboutright">
          <div className="aboutusimage">
            <img src={about2} alt="" />
          </div>
        </div>
        <div className="aboutusleft">
          <h1>When we work ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            expedita earum maiores corporis fugiat laboriosam dolorum qui saepe
            repudiandae ducimus.
          </p>
        </div>
      </div>
      <div className="aboutuscontent">
        <div className="aboutusleft">
          <h1>What we are doing ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            expedita earum maiores corporis fugiat laboriosam dolorum qui saepe
            repudiandae ducimus.
          </p>
        </div>
        <div className="aboutright">
          <div className="aboutusimage">
            <img src={about1} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="aboutuscontent">
        
        <div className="aboutright">
          <div className="aboutusimage">
            <img src={scrolldown} alt="" style={{
                width:"10px"
            }} />
          </div>
        </div>
        <div className="aboutusleft">
          <h1>Scroll down for see what we do !</h1>
        </div>
      </div> */}
      
    </div>
  );
}
