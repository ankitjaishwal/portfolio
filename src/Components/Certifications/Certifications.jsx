import React from "react";
import Header from "../Header/Header";

import { Typography } from "@material-ui/core";

import "./Certifications.css";

function Certifications() {
  return (
    <div id="certifications">
      <Header />
      <div className="container-fluid">
        <div className="row jumbotron mt-3">
          <div className="col">
            <h1 className="cHeader">Certifications</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mt-5 mb-3">
            <div className="card cardBorder">
              <iframe
                title="React"
                src="https://drive.google.com/file/d/1zAiaXsGPa_GbazieP0LzrecpR1LJfcq5/preview?usp=sharing"
                width="300"
                height="280"
                className="mx-auto mt-3"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title cTitle">
                  Front End Web Development with React <br />
                </h5>
                <hr className="hr" />
                <Typography align="left" className="card-text">
                  <b>Authorized by - </b> The Hongkong University of Science and
                  Technology <br /> <br />
                  <b>Offered through - </b> Coursera. <br />
                  <br />
                </Typography>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mt-5 mb-3">
            <div className="card cardBorder">
              <iframe
                title="React Native"
                src="https://drive.google.com/file/d/1QUGY-l035WxJ92srsUtY8NwoqJUVuuKS/preview?usp=sharing"
                width="300"
                height="280"
                className="m-auto mt-3"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title cTitle">
                  Multi Platform Mobile App Development with React Native
                </h5>
                <hr className="hr" />
                <Typography align="left" className="card-text">
                  <b>Authorized by - </b> The Hongkong University of Science and
                  Technology <br /> <br />
                  <b>Offered through - </b> Coursera. <br />
                  <br />
                </Typography>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mt-5 mb-3">
            <div className="card cardBorder">
              <iframe
                title="Node Js"
                src="https://drive.google.com/file/d/1yh1Rxy00EWA5Rj6aKnhKD3CkLXWXkdrw/preview?usp=sharing"
                width="300"
                height="280"
                className="m-auto mt-3"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title cTitle">
                  Server Side Development with NodeJs, Expesss and MongoDB
                </h5>
                <hr className="hr" />
                <Typography align="left" className="card-text">
                  <b>Authorized by - </b> The Hongkong University of Science and
                  Technology <br /> <br />
                  <b>Offered through - </b> Coursera. <br />
                  <br />
                </Typography>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mt-5 mb-3">
            <div className="card cardBorder">
              <iframe
                title="JS"
                src="https://drive.google.com/file/d/16aCxuUqacXwZALjG19fHFfiNjsy2q1Nn/preview?usp=sharing"
                width="300"
                height="280"
                className="m-auto mt-3"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title cTitle">
                  JavaScript and Data Structures
                </h5>
                <hr className="hr" />
                <Typography align="left" className="card-text">
                  <b>Authorized by - </b>FreeCodeCamp <br /> <br />
                  <b>Offered through - </b> FreeCodeCamp <br />
                  <br />
                </Typography>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mt-5 mb-3">
            <div className="card cardBorder">
              <iframe
                title="PHP"
                src="https://drive.google.com/file/d/1Ed6B8va84jfB4f6bXXWlrpUadjqws29t/preview?usp=sharing"
                width="300"
                height="280"
                className="m-auto mt-3"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title cTitle">PHP and MySQL</h5>
                <hr className="hr" />
                <Typography align="left" className="card-text">
                  <b>Offered by - </b> Spoken Tutorial Project, IIT Bombay{" "}
                  <br /> <br />
                  <b>Funded by - </b> MHRD, Govt. of India <br />
                  <br />
                </Typography>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mt-5 mb-3">
            <div className="card cardBorder">
              <iframe
                title="Data Sci"
                src="https://drive.google.com/file/d/1TzJt5rEzPeoMvyqnBpSZA8K8gnv9laQS/preview?usp=sharing"
                width="300"
                height="280"
                className="m-auto mt-3"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title cTitle">
                  Introduction to Data Science in Python
                </h5>
                <hr className="hr" />
                <Typography align="left" className="card-text">
                  <b>Authorized by - </b> University of Michigan <br /> <br />
                  <b>Offered through - </b> Coursera. <br />
                  <br />
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
