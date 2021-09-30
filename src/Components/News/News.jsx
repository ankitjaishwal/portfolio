import React from "react";
import Header from "../Header/Header";

import Startup from "../../assets/images/Startup.jpg";
import CloudTech from "../../assets/images/CloudTech.jpg";

import Marquee from "react-fast-marquee";

import "./News.css";

import { Typography } from "@material-ui/core";

function News() {
  return (
    <div id="news">
      <Header />
      <div className="container-fluid">
        <div className="row jumbotron mt-3">
          <div className="col">
            <h1 className="certHeader">NEWS</h1>
          </div>
        </div>
        <div className="row">
          <div className="row" id="news1">
            <div className="row mt-5 mb-3 px-5">
              <Marquee className="marque">
                <Typography variant="h4">
                  Job openings for these IT professionals surge 400%, highest
                  demand from Bengaluru
                </Typography>
              </Marquee>
            </div>
            <div className="row mt-3 px-5">
              <div className="col-12 col-md-5">
                <img width="400" height="200" src={Startup} alt="Startup" />
              </div>
              <div className="col-12 col-md-7">
                <Typography variant="body1" align="left">
                  As technology transformations become a key priority for
                  companies across India, hiring data suggests that job openings
                  for IT professionals have surged nearly 400%. Demand for
                  talent with niche and super niche skills is seeing an
                  exponential surge owing to pressure fuelled primarily by the
                  BFSI industry, according to a report. Demand for talent with
                  niche tech skills including Cloud Infrastructure Tech
                  developer, Full Stack developer, React JS developer, Android
                  Developer and Angular JS developer, among others, has seen a
                  surge since last quarter, according to data from business
                  solutions provider Quess.
                </Typography>
              </div>
            </div>
          </div>

          <div className="row my-3 px-5" id="news2">
            <div className="row">
              <Marquee className="marque">
                <Typography variant="h4">
                  Bengaluru saw highest demand for cloud tech developers in
                  August 2021
                </Typography>
              </Marquee>
            </div>
            <div className="row mt-3 px-5">
              <div className="col-12 col-md-7">
                <Typography variant="body1" align="left">
                  An analysis of the overall demand for the top 5 digital skills
                  among Tier 1 cities in August has shown that Bengaluru has
                  witnessed the highest demand (40%), followed by Hyderabad
                  (18%) and Pune (18%). A skill-wise break-up showed that
                  Bengaluru indicates high demand for Cloud Tech Developers
                  (41%), React JS Developers (44%), and Android Developers
                  (81%), according to data from business solutions provider
                  Quess. For Full Stack Developers, nearly equal demand was
                  witnessed across Bengaluru (42%) and Hyderabad (37%). Demand
                  for Angular JS Developers was evenly distributed across
                  Hyderabad (25%), Bengaluru (21%), Gurugram (21%), Chennai
                  (16%) and Pune (13%).
                </Typography>
              </div>
              <div className="col-12 col-md-5">
                <img width="400" height="200" src={CloudTech} alt="CloudTech" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
