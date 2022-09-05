import React from "react";
import "../assets/css/contact.css";
import img from '../assets/images/contactteam.png'


export default function Contact() {
  return (
    <div className="contact">
      
      <div className="centercontact">
        <div className="contactleft">
          <h1>Contact <span style={{color:"purple"}} >Us</span></h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            asperiores illum atque voluptatem consequuntur, cumque incidunt,
            velit pariatur nihil ullam ut nam unde mollitia fuga.
          </p>
          <img src={img} alt="" />
        </div>
        <div className="contactright">
          <div className="cf-flname">
           <div className="contactname">
           <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" />
           </div>
            <div className="contactname">
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" />
            </div>
          </div>
          <div className="contactname">
          <label htmlFor="email">Email</label>
          <input type="email" name="email"  />
          </div>
          <div className="contactname">
          <label htmlFor="matter">What can we help you with?</label>
          <textarea name="matter" id="matter"></textarea>
          </div>
          
            <button className="contactsub">
              Sbumit
            </button>
          
        </div>
      </div>
    </div>
  );
}
