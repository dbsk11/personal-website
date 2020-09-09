import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player'

const ProjectContainer = (props) => {
    return (
        <div className="project">
            <div className="askanswer">
                <h1>Ask:Answer</h1>
                <p>A student/teacher platform which allows students to message teachers with questions and/or request office hours. The teacher can view messages, respond to messages, and schedule office hours. It is built with a React frontend and Rails backend.</p>
                <ReactPlayer 
                    url="https://www.youtube.com/watch?v=z6n__IfAikk"
                />
                <div className="repos">
                    <a href="https://github.com/dbsk11/AskAnswerFrontEnd">
                        <h3>Frontend Repo</h3>
                    </a>
                    <a href="https://github.com/dbsk11/AskAnswerBackEnd">
                        <h3>Backend Repo</h3>
                    </a>
                </div>
            </div>
            <div className="flatflix">
                <h1>Flatflix</h1>
                <p>A netflix clone that allows a user to browse available movies separated by category and select individual movies to see information on a particular movie as well as watch the trailer. It is built with React frontend and Rails backend.</p>
                <ReactPlayer 
                    url="https://www.youtube.com/watch?v=mCmve4kKIGk"
                />
                <div className="repos">
                    <a href="https://github.com/dbsk11/flatflix_frontend">
                        <h3>Frontend Repo</h3>
                    </a>
                    <a href="https://github.com/ktomanelli/flatflix_backend">
                        <h3>Backend Repo</h3>
                    </a>
                </div>
            </div>
            <div className="mygrub">
                <h1>MyGrub</h1>
                <p>A grubhub clone, built with vanilla Javascript and a Rails backend, which allows users to choose a restaurant, select items to order, and add items to their cart.</p>
                <ReactPlayer 
                    url="https://www.youtube.com/watch?v=7lnuysS5NDY"
                />
                <div className="repos">
                    <a href="https://github.com/dbsk11/MyGrubFrontEnd">
                        <h3>Frontend Repo</h3>
                    </a>
                    <a href="https://github.com/dbsk11/MyGrubBackEnd">
                        <h3>Backend Repo</h3>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ProjectContainer);