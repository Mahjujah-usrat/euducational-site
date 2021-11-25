import React from 'react';
import ReactDom from "react-dom";

const About = () => {
    return (
        <div className="container about">
            <h1>The teacher is one of the most difficult professions, which brings both moral feelings and a huge reward!"</h1>
            <p>Host AnywherePublish your website to a local drive, FTP or host on Amazon S3, Google Cloud, Github Pages. Don't be a hostage to just one platform or service provider.Easy and Simple to Use
               Just drop the blocks into the page, edit content inline and publish - no technical skills required.
</p>
             <h1 className="student">Our Students Feedback</h1>
            <div className="row">
                <div className="col-md-4">
                   <div className="text-center border border-1 p-4 rounded-3">
                       <div className="py-5">
                           <img src="../../images/female1.jpg" alt="" /> 
                           <p>Slate helps you see how
                           many more days you need
                           to work to reach your financial
                           goal for the month and year</p>
                       </div>
                    
                   </div>
                </div>

                
            </div>
            
        </div>
    );
};

export default About;