import React from "react";

const Profile = () => {
  return (
    <>
      <header class="header">
        <div class="container">
          <div class="teacher-name">
            <div class="row">
              <div class="col-sm-9">
                <h2>
                  <strong>Rick Sanchez</strong>
                </h2>
              </div>
              <div class="col-sm-3">
                <div class="button pull-right">
                  <a href="#" class="btn btn-outline-success btn-sm">
                    Edit Profile <i class="fa fa-pencil"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="row" style={{"marginTop":"20px;"}}>
            <div class="col-sm-3">
              <a href="#">
                {" "}
                <img
                  class="rounded-circle"
                  src="//images.weserv.nl/?url=i.imgur.com/Md9jS0Ib.jpg"
                  alt="Rick"
                />
              </a>
            </div>

            <div class="col-sm-6">
              <h5>
                Associate Professor,{" "}
                <small>Dept. of Alien Agriculture, Jaarvlar-3 University</small>
              </h5>
              <p>PhD on Molecular Shwanky Physics</p>
              <p>Address: 123 Cuba str Tampa, Fl, Earth 137</p>
            </div>

            <div class="col-sm-3 text-center social">
              <span class="number">
                Phone:<strong>+0001732226402</strong>
              </span>
              <div class="button-email">
                <a
                  href="mailto:arick@yahoo.com"
                  class="btn btn-outline-success btn-block"
                >
                  <i class="fa fa-envelope-o"></i> Send Email
                </a>
              </div>
              <div class="social-icons">
                <a href="#">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a href="#">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-google-plus fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a href="#">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a href="#">
                  <span class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-slideshare fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="card card-block text-xs-left">
              <h5>
                <i class="fa fa-user fa-fw"></i>Biography
              </h5>

              <p>
                Rick Sanchez C-137 is the father of Beth Smith, and the
                grandfather of Morty and Summer Smith. Aged 60 years old, he is
                said to have been away from the family for around fourteen years
                prior to the events of the show's first episode, "Pilot". He
                frequently travels on adventures through space and other planets
                and dimensions with his grandson Morty.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card card-block">
              <h5>
                <i class="fa fa-rocket fa-fw"></i>Interests
              </h5>
              <ul
                class="list-group"
                style={{"marginTop":"15px;","marginBottom":"15px;"}}
              >
                <li class="list-group-item">Cloud & Parallel Computing</li>
                <li class="list-group-item">
                  Big Data Analysis and Management
                </li>
                <li class="list-group-item">
                  High-performance and Low-Power Real-Time Systems
                </li>
                <li class="list-group-item">
                  Mobile Embedded Systems and Network Security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
