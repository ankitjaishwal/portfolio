import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import Header from "../Header/Header";
import ContactImg from "../../assets/images/ContactImg.png";

import { Typography } from "@material-ui/core";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { RiCodeBoxFill } from "react-icons/ri";

import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import "./Contact.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_30fzerh",
        "template_v50c8lk",
        form.current,
        "user_Z5Ckm2JkOsKO6VavaolR5",
        e.target
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
      <Header />
      <div className="container-fluid">
        <div className="row jumbotron mt-3">
          <div className="col">
            <h1 className="cHeader">Contact</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5 d-none d-sm-block mt-5 mb-3 mx-auto">
            <img className="image" src={ContactImg} alt="Contact" />
          </div>
          <div className="col-md-6 mt-5 mb-3 mx-auto">
            <div
              className="card cardBorder"
              style={{ backgroundColor: "#d9f8d9", border: "solid red 2px" }}
            >
              <div className="card-body">
                <h3 className="card-title cTitle">Feel free to reach to me</h3>
                <hr className="hr" />

                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group row mx-auto">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row mt-3 mx-auto">
                    <div className="col-md-12">
                      {" "}
                      <textarea
                        row="3"
                        className="form-control"
                        id="email"
                        name="comment"
                        placeholder="Comment"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group row mt-3 mx-auto">
                    <div className="col-md-4 mx-auto">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-4">
              <Typography variant="h4">
                <a
                  rel="noreferrer"
                  className="icons"
                  target="_blank"
                  href="https://leetcode.com/jaishwal25/"
                >
                  {" "}
                  <RiCodeBoxFill />{" "}
                </a>{" "}
                <a
                  rel="noreferrer"
                  className="icons"
                  target="_blank"
                  href="https://www.linkedin.com/in/ankit-jaishwal-9b647318a/"
                >
                  {" "}
                  <FaLinkedinIn />{" "}
                </a>{" "}
                <a
                  rel="noreferrer"
                  className="icons"
                  target="_blank"
                  href="https://github.com/ankitjaishwal"
                >
                  <FaGithubSquare />{" "}
                </a>
                <a
                  rel="noreferrer"
                  className="icons"
                  target="_blank"
                  href="https://drive.google.com/file/d/1AFiPkffVzJoMkoxWEbZDuR8t3cYalyqa/view?usp=sharing"
                >
                  <HiDocumentText />{" "}
                </a>
                <a
                  rel="noreferrer"
                  className="icons"
                  target="_blank"
                  href="https://twitter.com/the_MusicalGeek"
                >
                  <FaTwitter />
                </a>{" "}
              </Typography>
            </div>
          </div>
        </div>
        {showAlert && (
          <Snackbar open={showAlert} autoHideDuration={6000}>
            <Alert
              onClose={() => setShowAlert(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              Email Sent!
            </Alert>
          </Snackbar>
        )}
      </div>
    </div>
  );
}

export default Contact;
