import React from 'react';
import { withRouter } from 'react-router-dom';

const ResumeContainer = (props) => {
    let resumepdf = require("../images/Jessica_Kim_Resume.pdf");
    let resume = require("../images/resume.png");

    return (
        <div className="resume">
            <div className="downloadresume">
                < a href={resumepdf}>
                    <button className="button">Download Resume</button>
                </a>
            </div>
            <img src={resume} className="resumeimage"/>
        </div>
    );
};

export default withRouter(ResumeContainer);