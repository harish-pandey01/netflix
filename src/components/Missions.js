import React from "react";
import "../assets/css/mission.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

export default function Missions(props) {

if (props.title === "ondc"){
    return (
            <div className="missions ondc">
              <div className="missiontitle">
                <div className="projecttitle">
                    <div className="titlecard">
        <h1>Open Nework For Digital Commerce | ONDC</h1>
                    </div>
                </div>
              </div>
              <div className="missiondetail">
                <div className="missioncards">
                  <div className="missioncard">
                    <h1>What's the mission</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                      suscipit, velit nulla consectetur ut commodi deserunt est
                      temporibus ex reprehenderit voluptas!
                    </p>
                  </div>
                  <div className="missioncard">
                    <h1> About mission </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus, reprehenderit non commodi, veniam, porro odio quia
                      exercitationem impedit consequatur magni voluptatibus!
                      Perspiciatis tempora sapiente veritatis quae totam, nulla vitae
                      sit! <button>Explore more </button>
                    </p>
                  </div>
                </div>
                <div className="missionimage">
                  <div className="missionimgcard">
                    <img
                      src="https://1stwebdesigner.com/wp-content/uploads/2020/03/dark-website-designs-3dhubs.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          );
    
}
else if (props.title === "healthcare"){
    return (
        <div className="missions health">
          <div className="missiontitle">
          <div className="projecttitle">
                <div className="titlecard">
    <h1>Health Care App | Swasth Aadhar app</h1>
                </div>
            </div>
            
            
          </div>
          <div className="missiondetail">
          <div className="missionimage">
              <div className="missionimgcard">
                <img
                  src="https://www.spaceotechnologies.com/wp-content/uploads/2017/08/best-healthcare-app-ideas-1-1.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="missioncards">
              <div className="missioncard">
                <h1>What's the mission</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                  suscipit, velit nulla consectetur ut commodi deserunt est
                  temporibus ex reprehenderit voluptas!
                </p>
              </div>
              <div className="missioncard">
                <h1> About mission </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, reprehenderit non commodi, veniam, porro odio quia
                  exercitationem impedit consequatur magni voluptatibus!
                  Perspiciatis tempora sapiente veritatis quae totam, nulla vitae
                  sit! <button>Explore more </button>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      );
}

}
