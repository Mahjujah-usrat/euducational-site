
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom"
   


    const Contact = () => {
        return (
            <div>

<section id="contact-page">
        <div className="container">
            <div className="center">        
                <h2>Drop Your Message</h2>
                <p className="lead">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div> 
            <div className="row contact-wrap"> 
                <div className="status alert alert-success" ></div>
                <form id="main-contact-form" className="contact-form" name="contact-form" method="post" action="">
                    <div className="col-sm-5 mx-auto col-sm-offset-1">
                        <div className="form-group">
                            <label>Name *</label>
                            <input type="text" name="name" className="form-control" required="required"/>
                        </div>
                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" name="email" className="form-control" required="required"/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="number" className="form-control"/>
                        </div>
                                          
                    </div>
                    <div className="col-sm-5 mx-auto">
                        <div className="form-group">
                            <label>Subject *</label>
                            <input type="text" name="subject" className="form-control" required="required"/>
                        </div>
                        <div className="form-group">
                            <label>Message *</label>
                            <textarea name="message" id="message" required="required" className="form-control" rows="8"></textarea>
                        </div>                        
                        <div className="form-group">
                            <button type="submit" name="submit" className="btn btn-primary btn-lg" required="required">Submit Message</button>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
    </section>

    
            </div>
        );
    };
    
    export default Contact;