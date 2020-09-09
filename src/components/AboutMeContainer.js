import React from 'react';
import { withRouter } from 'react-router-dom';

const AboutMeContainer = (props) => {

    let linkedinlogo = require("../images/linkedin.png");
    let mediumlogo = require("../images/medium.jpg");
    let githublogo = require("../images/github.png");

    return (
        <div className="aboutmepage">
            <div className="aboutme">
                <h1>About Me</h1>
                <h5>I am a teacher turned web developer experienced with fullstack web development using Ruby, Ruby on Rails, Javascript, React, and SQL. I have always loved solving puzzles and problems and discovered that as a developer, I can do just that! </h5>
                <h5>My background is in secondary education with a concentration in Biological Sciences. I thoroughly enjoyed teaching but wanted to pursue a field where I would be able to work creatively and problem-solve. I ended up attending Flatiron School where I learned how to think like a programmer and build the foundation for skills I need to pursue my dream of becoming a software engineer. </h5>
                <h5>In addition to coding, I enjoy spending time doing activities such as rock climbing, flag football, hiking, and cooking. </h5>
                <h5>Want to know more?  
                    <a href="mailto:jessikim807@gmail.com">
                        email me
                    </a>
                </h5>
            </div>
            <div className="links">
                <a href="https://www.linkedin.com/in/jessica-kim11/">
                    <img src={linkedinlogo} className="logoimage"/>
                </a>
                <a href="https://github.com/dbsk11">
                    <img src={githublogo} className="logoimage"/>
                </a>
                <a href="https://medium.com/@jesskim11">
                    <img src={mediumlogo} className="logoimage"/>
                </a>
            </div>
        </div>
    );
};

export default withRouter(AboutMeContainer);