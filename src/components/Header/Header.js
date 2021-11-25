import React from 'react';
import SetMenu from "../SetMenu/SetMenu";
import "./Header.css";
const Header = () => {
    return (
        <div className="header-container">
       <div className="">
       <div className="row d-flex header align-items-center justify-content-center">
       <SetMenu></SetMenu>
       <div className="col-md-6">
       <h1 className="title">
       Struggling in life <br />
       I can help.</h1>
       <p className="text-white text-center mt-3 ">
       Discover the simple 3 Steps that I Discovered to Hack Productivity.It works %100. Wanna transform your life?
       </p>
       <button className="mt-3 about-btn">Get Your Free Guid Now</button>
       </div>
       <div className="col-md-6">
       </div>
       </div>
       </div>
            
        </div>
    );
};

export default Header;