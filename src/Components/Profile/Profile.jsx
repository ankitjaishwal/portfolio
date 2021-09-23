import React from "react";

import Typography from "@material-ui/core/Typography";
import { FaLaptopCode } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  return (
    <div id="profile">
      <Header />
      <div className="container-fluid">
        <div className="row jumbotron mt-3">
          <div className="col">
            <h1 className="pHeader">Profile</h1>
          </div>
        </div>
        <div className="row mt-3 profileHeader">
          <div className="col-md-4">
            <div className="row">
              <h3 className="">
                Experience <FaLaptopCode className="pIcons" />{" "}
                <hr className="hr" />
              </h3>
            </div>
            <div className="row">
              <div className="col ms-1 ms-md-5 mt-1">
                <ul>
                  <li>
                    <Typography align="left" variant="body1">
                      Software Engineering Intern at Pune management
                      Association, Pune (Jan 2021 - July 2021)
                    </Typography>
                  </li>
                  <li>
                    <Typography align="left" variant="body1">
                      React JS Intern at Sirpi Products and Services Pvt. Ltd.,
                      Bengaluru (Apr 2021 - June 2021)
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <h3 className="">
                Education <MdLibraryBooks className="pIcons" />{" "}
                <hr className="hr" />
              </h3>
            </div>
            <div className="row">
              <div className="col ms-1 ms-md-5 mt-1">
                <ul>
                  <li>
                    <Typography align="left" variant="body1">
                      Master of Computer Applications, Savitribai Phule Pune
                      University, Pune (2019 - Present).
                    </Typography>
                  </li>
                  <li>
                    <Typography align="left" variant="body1">
                      Bachelor of Computer Applications,Indira Gandhi National
                      Open University, New Delhi (2015 - 2018).
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <h3 className="">
                Skills <GiSkills className="pIcons" /> <hr className="hr" />
              </h3>
            </div>
            <div className="row">
              <div className="col ms-1 ms-md-5 mt-1">
                <ul>
                  <li>
                    <Typography align="left" variant="body1">
                      Languages - C, C++, JavaScript, Java, Python, PHP.
                    </Typography>
                  </li>
                  <li>
                    <Typography align="left" variant="body1">
                      Web Development - HTML, CSS, Bootstrap, Material UI,
                      ReactStrap, ReactJs, NodeJs, Express, Redux, React Native,
                      AJAX, jQuery, Flask.
                    </Typography>
                  </li>
                  <li>
                    <Typography align="left" variant="body1">
                      Databases - MySQL, Oracle, MongoDB, Firebase(Firestore).
                    </Typography>
                  </li>
                  <li>
                    <Typography align="left" variant="body1">
                      Technologies - GIT, MERN Stack, LAMP Stack.
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
