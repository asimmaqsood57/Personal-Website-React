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
      <div className="row">
        <div className="card mx-2 my-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <img
              src={programming}
              height="245px"
              className="card-img-top"
              alt="..."
            />
            <h4 style={{ marginTop: "1rem" }}>
              {" "}
              <strong> 1- What is Programming?</strong>{" "}
            </h4>

            <p className="card-text">
              {" "}
              <i>
                {" "}
                “Programming is how you get computers to solve problems.” <br />{" "}
              </i>
              There are two key phrases here which are important:
              <span id="dots">...</span>
              <span id="more">
                {" "}
                <br /> you: <br /> without the programmer (you), the computer is
                useless. It does what you tell it to do. <br />
                <b>solve problems:</b> <br /> computers are tools. They are
                complex tools, admittedly, but they are not mysterious or
                magical: they exist to make tasks easier. <br />
                Computer programs (or software) are what make computers work.
                Without software, modern computers are just complicated machines
                for turning electricity into heat. It’s software on your
                computer that runs your operating system, browser, email, games,
                movie player – just about everything. <br />
                Programming is a creative task: there is no right or wrong way
                to solve a problem, in the same way that there is no right or
                wrong way to paint a picture. There are choices to be made, and
                one way may seem better than another, but that doesn’t mean the
                other is wrong! With the right skills and experience, a
                programmer can craft software to solve an unlimited number of
                problems – from telling you when your next train will arrive to
                playing your favourite music. The possibilities are constrained
                only by your imagination. That’s why I love programming.
              </span>
            </p>
            <button
              onclick="myFunction()"
              id="myBtn"
              className="btn btn-primary btn-sm"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="card mx-4 my-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <img
              src={SoftwareEngineers}
              height="245px"
              className="card-img-top"
              alt="..."
            />
            <h4 style={{ marginTop: "1rem" }}>
              <strong> 2- What does a Software Engineer do?</strong>{" "}
            </h4>

            <p className="card-text">
              What image comes to your mind when you think “Software Engineer?”A
              super-genius-type<span id="dots2">...</span>
              <span id="more2">
                creates things out of thin air – like Bill Gates or Alan
                Turing?Or someone in a dark room, listening to techno music and
                typing furiously on the computer – like in The Matrix?
                <br />
                Maybe you envision a corporate-style engineer – wearing
                headphones and going to scrum meetings in an office. Or a
                freelance “digital nomad” engineer who codes from a cafe on the
                beach.
                <br />A software engineer uses computer science principles to
                develop software solutions that will satisfy the wants and needs
                of businesses and consumers. Software engineers create many
                types of solutions such as desktop and web applications, mobile
                apps, games, robots, operating systems, network systems, etc.
              </span>
            </p>
            <button
              onclick="myFunction2()"
              id="myBtn2"
              className="btn btn-primary btn-sm"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="card mx-2 my-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <img
              src="https://www.roberthalf.com/sites/default/files/2018-04/front-end-web-developer-salary-tcg-2018.jpg"
              height="245px"
              className="card-img-top"
              alt="..."
            />
            <h4 style={{ marginTop: "1rem" }}>
              <strong>3 -What comes under front end developer?</strong>{" "}
            </h4>

            <p className="card-text">
              A front-end developer architects and develops websites and
              applications using web technologies<span id="dots3">...</span>
              <span id="more3">
                (i.e., HTML, CSS, DOM, and JavaScript), which run on the Open
                Web Platform or act as compilation input for non-web platform
                environments (i.e., React Native).Typically, a person enters
                into the field of front-end development by learning to develop
                HTML, CSS, and JavaScript which commonly runs in a web browser
                but can also run in a headless browser, WebView, or as
                compilation input for a native runtime environment.
              </span>
            </p>
            <button
              onclick="myFunction3()"
              id="myBtn3"
              className="btn btn-primary btn-sm"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
