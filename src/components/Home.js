import React from "react";

import html from "../images/html5.png";

import js from "../images/js.png";

import typist from "../images/typist.png";

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
              I'm your Full-Stack Web Developer. <br />
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
