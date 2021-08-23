import React from "react";

import programming from "../images/what is programming.jpeg";
import SoftwareEngineers from "../images/Software Engineers.jpg";

export default function Blogs() {
  return (
    <div className="container-fluid">
      <h2 className="center my-4">
        {" "}
        <strong>Blogs</strong>{" "}
      </h2>

      <div className="container">
        <h3 className="text-center">
          <strong> 1- What is Programming?</strong>
        </h3>

        <img
          src={programming}
          height="450rem"
          className="card-img-top"
          alt="..."
        />

        <p style={{ textAlign: "justify" }} className="mt-3">
          Programming is a creative task: there is no right or wrong way to
          solve a problem, in the same way that there is no right or wrong way
          to paint a picture. There are choices to be made, and one way may seem
          better than another, but that doesn’t mean the other is wrong! With
          the right skills and experience, a programmer can craft software to
          solve an unlimited number of problems – from telling you when your
          next train will arrive to playing your favourite music. The
          possibilities are constrained only by your imagination. That’s why I
          love programming.
        </p>
        <h3 className="text-center">
          <strong> 2- What is Programming?</strong>
        </h3>

        <img
          src={programming}
          height="450rem"
          className="card-img-top"
          alt="..."
        />

        <p style={{ textAlign: "justify" }} className="mt-3">
          Programming is a creative task: there is no right or wrong way to
          solve a problem, in the same way that there is no right or wrong way
          to paint a picture. There are choices to be made, and one way may seem
          better than another, but that doesn’t mean the other is wrong! With
          the right skills and experience, a programmer can craft software to
          solve an unlimited number of problems – from telling you when your
          next train will arrive to playing your favourite music. The
          possibilities are constrained only by your imagination. That’s why I
          love programming.
        </p>
      </div>
    </div>
  );
}
