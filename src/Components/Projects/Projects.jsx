import { Typography } from "@material-ui/core";
import React from "react";

import Header from "../Header/Header";
import JT from "../../assets/images/JT.png";
import RCF from "../../assets/images/RCF.png";
import YTD from "../../assets/images/YTD.png";

import "./Projects.css";

function Projects() {
  return (
    <div id="projects">
      <Header />
      <div className="container-fluid">
        <div className="row jumbotron mt-3">
          <div className="col">
            <h1 className="pHeader">Projects</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mt-5 mb-3">
            <div className="card cardBorder">
              <img
                height="230"
                className="card-img-top"
                src={RCF}
                alt="Ristorante Con fusion"
              />
              <div className="card-body">
                <h5 className="card-title cTitle">
                  Ristorante Confusion Web Application
                </h5>
                <hr className="hr" />
                <Typography align="left" className="card-text">
                  It’s a web as well as mobile application for a restaurant
                  where users can explore different dishes, like and comment on
                  dishes and provide feedback. <br /> <br />
                  <b>Built with - </b> ReactJs, React Native, Redux, NodeJs,
                  Express, MongoDB, ReactStrap. <br />
                  <br />
                </Typography>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://ankitjaishwal.github.io/confusion"
                  class="btn btn-primary"
                >
                  Go to Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-5 mb-3">
            <div className="card cardBorder">
              <img
                height="230"
                className="card-img-top"
                src={YTD}
                alt="Youtube Video Downloader"
              />
              <div className="card-body">
                <h5 className="card-title cTitle">Youtube Video Downloader</h5>
                <hr className="hr" />
                <Typography align="left" className="card-text">
                  It's a simple Youtube Video Downloader web application where
                  users just have to enter the URL of the youtube video, and it
                  will get downloaded.
                  <br /> <br />
                  <b>Built with - </b> Flask, Python, Bootstrap, SQLite <br />
                  <br />
                </Typography>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://flaskvideo-downloader.herokuapp.com/"
                  class="btn btn-primary"
                >
                  Go to Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-5 mb-3">
            <div className="card cardBorder">
              <img
                height="230"
                className="card-img-top"
                src={JT}
                alt="Just Talk"
              />
              <div className="card-body">
                <h5 className="card-title cTitle">Live Chat Web Application</h5>
                <hr className="hr" />
                <Typography align="left" className="card-text">
                  It's a one on one chat application where user can register and
                  chat with the another registered peoples.
                  <br /> <br />
                  <b>Built with - </b> HTML, CSS, Bootstrap, JavaScript, jQuery,
                  AJAX, PHP, Ratchet Web Socket, MySQL <br />
                  <br />
                </Typography>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://flaskvideo-downloader.herokuapp.com/"
                  class="btn btn-primary"
                >
                  Go to Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
