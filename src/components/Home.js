import React from "react";

import html from "../images/html5.png";
import java from "../images/java.png";
import cpp from "../images/c++.png";
import mysql from "../images/mysql.png";
import firebase from "../images/firebase.png";
import express from "../images/express.svg";
import mongodb from "../images/mongodb.svg";
import react from "../images/react.png";
import js from "../images/js.png";

import php from "../images/PHP.svg";

import typist from "../images/typist.png";

import nodejs from "../images/nodejs.png";
import uiux from "../images/ui ux.png";
import bootstrap from "../images/bootstrap.png";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row center">
          <div className="cols col-sm-5 my-3 mx-4 tracking-in-contract">
            <h1 className="my-5">
              Hello! <br />
              I'm your Full-Stack Web Developer (MERN). <br />
              <br />
              <a
                href="https://www.fiverr.com/share/PmEyBw"
                rel="noreferrer"
                target="_blank"
              >
                <button className="btn btn-primary btn-lg">Hire Me Now</button>
              </a>
            </h1>
          </div>
          <div className="cols col-sm-4 my-3 mx-4 center">
            <h3 className="my-4">Why me..??</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>
                  <img
                    src="https://www.freepnglogos.com/uploads/tick-png/tick-png-clipart-best-23.png"
                    className="whymelist img-fluid"
                    alt=""
                  />
                  Well-experienced
                </b>
              </li>
              <li className="list-group-item">
                <b>
                  <img
                    src="https://www.freepnglogos.com/uploads/tick-png/tick-png-clipart-best-23.png"
                    className="whymelist img-fluid"
                    alt=""
                  />
                  Client Satisfaction
                </b>
              </li>
              <li className="list-group-item">
                <b>
                  <img
                    src="https://www.freepnglogos.com/uploads/tick-png/tick-png-clipart-best-23.png"
                    className="whymelist img-fluid"
                    alt=""
                  />
                  Unlimited Revisions
                </b>
              </li>
              <li className="list-group-item">
                <b>
                  <img
                    src="https://www.freepnglogos.com/uploads/tick-png/tick-png-clipart-best-23.png"
                    className="whymelist img-list"
                    alt=""
                  />
                  100% Money Back <br />
                  if not satisfied
                </b>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="center my-4">
          <strong>Skills</strong>
        </h2>
        <div className="row">
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">HTML 5</h3>
            <img
              src={html}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              It is used to build structure of website.Its also called website
              skelton.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">CSS 3</h3>
            <img
              src="https://blog.leonhassan.co.uk/content/images/2019/09/css3.svg"
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              It is used for website designing. It is also used to make
              attractive website.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">JavaScript</h3>
            <img
              src={js}
              alt="JavaScript logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              It is used to build interactive websites. It is also known to be
              brain of website.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">Bootstrap</h3>
            <img
              src={bootstrap}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              It is used to build responsive websites. It is a css framework.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">UI/UX</h3>
            <img
              src={uiux}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              It refers to any interaction a user has with a product or service.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">Typist</h3>
            <img
              src={typist}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">Speed upto 35-40 wpm</p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">Node Js</h3>
            <img
              src={nodejs}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              Node.js is an back-end JavaScript runtime environment that runs on
              the V8 engine{" "}
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">React Js</h3>
            <img
              src={react}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              React is a free and open-source front-end JavaScript library for
              building user interfaces or UI components.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">MongoDB</h3>
            <img
              src={mongodb}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              MongoDB is a source-available cross-platform document-oriented
              database program.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">Express Js</h3>
            <img
              src={express}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              Express.js, or simply Express, is a back end web application
              framework for Node.js.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">PHP</h3>
            <img src={php} alt="Html5 logo" className="skillslogos img-fluid" />
            <p className="paragraph">
              PHP is a general-purpose scripting language geared towards web
              development.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">Mysql</h3>
            <img
              src={mysql}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              MySQL is an open-source relational database management system
            </p>
          </div>

          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">Firebase</h3>
            <img
              src={firebase}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              Firebase is a platform developed by Google for creating mobile and
              web applications
            </p>
          </div>

          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">C++</h3>
            <img src={cpp} alt="Html5 logo" className="skillslogos img-fluid" />
            <p className="paragraph">
              c++ is an extension of the C programming language, or "C with
              Classes".
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">Java</h3>
            <img
              src={java}
              alt="Html5 logo"
              className="skillslogos img-fluid"
            />
            <p className="paragraph">
              Java is a high-level, class-based, object-oriented programming
              language
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="center my-4">
          <strong>Projects </strong>
        </h2>
        <div className="row">
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">To Do List</h3>
            <img
              src="https://icon-library.com/images/list-icon-png/list-icon-png-27.jpg"
              alt="Html5 logo"
              className="skillslogos img-fluid my-2"
            />
            <p className="paragraph">
              It is a website where users can write their important notes.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">Current Time</h3>
            <img
              src="https://img.icons8.com/pastel-glyph/2x/clock.png"
              alt="Html5 logo"
              className="skillslogos img-fluid my-2"
            />
            <p className="paragraph">
              It is a website where users can check current Date and Time.
            </p>
          </div>
          <div className="cols col-sm-3 my-3 mx-4 center">
            <h3 className="my-2">My Portfolio</h3>
            <img
              src="https://cdn4.iconfinder.com/data/icons/folders-blue/64/194_folder-job-portfolio-person-512.png"
              alt="Html5 logo"
              className="skillslogos img-fluid my-2"
            />
            <p className="paragraph">Its my Portfolio Website.</p>
          </div>
        </div>
      </div>
    </>
  );
}
