import React from "react";
import Typist from "react-typist";

import Header from "../Header/Header";
import Typography from "@material-ui/core/Typography";
import ProfilePic from "../../assets/images/ProfilePic.png";
import "./Homepage.css";

function Homepage() {
  return (
    <div id="home">
      {" "}
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mt-4 m-md-auto">
            <img width="270" height="270" src={ProfilePic} alt="Profile" />
          </div>
          <div className="col-md-8">
            <div
              className="row jumbotron introductionRow"
              style={{ margin: "100px 0 70px 0" }}
            >
              <h1 className="display-3 intro">Hey, I'm Ankit Jaishwal</h1>
              <h2>
                <Typist>a Full-Stack Web Developer</Typist>
              </h2>
            </div>
            <div className="row px-3 px-md-0">
              <Typography align="left" className="display-3 intro" variant="h4">
                About Me
              </Typography>
              <hr style={{ color: "red" }} />
            </div>
            <div className="row mt-3">
              <div className="row">
                <Typography align="left">
                  <ul>
                    <li>
                      {" "}
                      A goal-oriented individual inclined towards problem
                      solving and learning new skills.{" "}
                    </li>
                    <li>
                      {" "}
                      Currently pursuing Master of Computer Applications from
                      Pimpri Chinchwad College of Engineering, Pune.
                    </li>
                    <li> Besides technologies, I'm spirited about Music.</li>
                  </ul>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
