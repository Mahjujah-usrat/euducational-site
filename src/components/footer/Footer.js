import React from 'react';
import "./footer.css";
import ReactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import{
//     faFacebookSquare,
//   faInstagramSquare,
//   faTwitterSquare,
//   faYoutube,
// }from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <div>
           <div className="footer-container">
               <div className="container">
                   <div className="row">
                       <div className="col-md-5">
                           <div className="left-container text-start">
                               <h1>Coaching</h1>
                               {/* <div className="icons-container d-flex text-center">
                                   <div className="icon">
                                      
                                   </div>
                                   <div className="icon">
                                   
                                   </div>
                                   <div className="icon">
                                   
                                   </div>
                                   <div className="icon">
                                   
                                   </div>
                               </div>
                                */}
                               <p className="mt-4">
                                   <small>
                                       *"When I say that the child is unusual, I really believe in it. And if I call my parents to school and talk about the behavior or assessments of the student, then only because I believe: he really can improve."
                                   </small>
                               </p>
                               <p className="mt-5">
                                   <small>Usrat © .All rights reserved </small>
                               </p>
                               </div>
                               </div>
                               <div className="col-md-2">
                                   <div className="footer-menu-container">
                                       <ul>
                                           <li className="footer-menu">Home</li>
                                           <li className="footer-menu">Services</li>
                                           <li className="footer-menu">Slider</li>
                                           <li className="footer-menu">Contact us</li>
                                             <li className="footer-menu"> About us</li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="col-md-5">
                               <div className="right-footer-container">
                              <h3>Sign up for the newsletter</h3>
                                  <input
                                 className="footer-input"
                             type="text"
                             placeholder="Enter your Email" />
                             <div className="phone d-flex align-items-center justyfy-content-center mt-4">
                                 <div className="new">
                                     <img src="../../images/logo/logo.png" alt="" />
                                 </div>
                             </div>
                             
                               </div>
                               </div>
                               <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                  <p>
                      160 Baridhara, New city, NY 10038,
                      <br /> 102 1st Avenue, Dhaka, NY 100
                    </p>
                  </div>
                </div> 
                </div>
              </div>
              </div>
                </div> 
               
    );
};

export default Footer;