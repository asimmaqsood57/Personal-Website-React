import React from "react";

import asim from "../images/asim.jpg";
export default function Footer() {
  return (
    <div style={{ backgroundColor: "#007bff" }} className="container-fluid">
      <div className="row center">
        <div className="cols col-sm-5 my-3 mx-4 footermyintro">
          <h3 className="my-4">About Me</h3>
          <img src={asim} className="my-3 img-fluid" alt="" />
          <p>
            I'm Asim from Mianwali. I have passed the Matric Examination from
            Govt.Gillani School Wah-cantt and passed the FSC Examination from
            Fazaia college Mianwali. Currently, I'm studying Software
            Engineering from Air University Islamabad. Along with , I work as a
            freelancer.
          </p>
        </div>
        <div className="cols col-sm-4 my-3 mx-4 center footer">
          <h3 className="my-2">Social Media</h3>
          <ul
            className="list-group list-group-flush"
            style={{ color: "white" }}
          >
            <li
              className="list-group-item"
              style={{ backgroundColor: "#007bff" }}
            >
              <a
                href="https://www.facebook.com/masim.maqsood.509"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{ backgroundColor: "#4267b2", borderRadius: "100px" }}
                  className="btn btn-info btn-lg btn-block"
                >
                  Facebook
                </button>
              </a>
            </li>
            <li
              className="list-group-item"
              style={{ backgroundColor: "#007bff" }}
            >
              <a
                rel="noreferrer"
                href="https://twitter.com/MAsimMaqsood1?s=09"
                target="_blank"
              >
                <button
                  style={{ backgroundColor: "#1da1f2", borderRadius: "100px" }}
                  className="btn btn-info btn-lg btn-block"
                >
                  Twitter
                </button>
              </a>
            </li>
            <li
              className="list-group-item"
              style={{ backgroundColor: "#007bff" }}
            >
              <a href="https://wa.link/03bd7s" rel="noreferrer" target="_blank">
                <button
                  style={{ backgroundColor: "#3eca55", bordeRadius: "100px" }}
                  className="btn btn-info btn-lg btn-block"
                >
                  WhatsApp
                </button>
              </a>
            </li>
            <li
              className="list-group-item"
              style={{ backgroundColor: "#007bff" }}
            >
              <a
                href="https://github.com/asimmaqsood57"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  style={{ backgroundColor: "#000000", borderRadius: "100px" }}
                  className="btn btn-info btn-lg btn-block"
                >
                  Git-hub
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="center my-4 copyright">
        Copyright &copy; 2021-2022 All Rights Reserved
      </h3>
    </div>
  );
}
