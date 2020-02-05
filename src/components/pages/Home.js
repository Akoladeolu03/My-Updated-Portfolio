import React, {Link} from "react";

function Home() {
  return (
    <div className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{"max-width":"1400px"}}>
        <div className="w3-row-padding">
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img
                  src="Assets/images/mypics1.png"
                  style={{"width":"100%"}}
                  alt="Avatar"
                />
                <div className="w3-display-bottomleft w3-container w3-text-white">
                  <h2>Akolade Oke</h2>
                </div>
              </div>
              <div className="w3-container">
                <p>
                  <i
                    className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >Full Stack Web Developer
                </p>
                <p>
                  <i
                    className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >New York, USA
                </p>
                <p>
                  <i
                    className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >akoladeolubiyi@yahoo.com.com
                </p>
                <p>
                  <i
                    className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >+1 551-358-8715
                </p>
                <hr />
                <p className="w3-large">
                  <b
                  ><i
                    className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"
                  ></i
                    >Skills</b
                  >
                </p>
                <p>React.js</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{"width":"90%"}}
                  >
                    60%
                  </div>
                </div>
                <p>HTML5/CSS3</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{"width":"80%"}}
                  >
                    <div className="w3-center w3-text-white">80%</div>
                  </div>
                </div>
                <p>JavaScript</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{"width":"75%"}}
                  >
                    75%
                  </div>
                </div>
                <p>Mongodb</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{"width":"50%"}}
                  >
                    50%
                  </div>
                </div>
                <br />
                <p>Express</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{"width":"50%"}}
                  >
                    50%
                  </div>
                </div>
                <br />
                <p className="w3-large w3-text-theme">
                  <b
                  ><i
                    className="fa fa-globe fa-fw w3-margin-right w3-text-teal"
                  ></i
                    >Languages</b
                  >
                </p>
                <p>English</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{height:"24px", width:"100%"}}
                  ></div>
                </div>
                <br />
              </div>
            </div>
            <br />
          </div>
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i
                  className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"
                ></i
                >Work Experience
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Shift Supervisor(Site Support& Operations)</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>April 2019
                  - <span className="w3-tag w3-teal w3-round">Current</span>
                </h6>
                <p>Bristol Myers Squibb</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity"><b>Laundry Zone</b></h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>October
                  2016- March 2019
                </h6>
                <p>Assitant Manager</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b
                  >Ibadan Electricity Distribution Company, Ogun State Region
                    Nigeria</b
                  >
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>October
                  2013 - April 2016
                </h6>
                <p>Team Lead (Customer Relation Officer</p>
                <br />
              </div>
            </div>
            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16">
                <i
                  className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"
                ></i
                >Education
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Rutgers University Coding Bootcamp</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>August
                  2019 - February 2020
                </h6>
                <p>Full Stack Web development</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Moshood Abiola Polytechnic Ogun State Nigeria</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>2005 -
                  2007
                </h6>
                <p>Higher National Diploma in Accounting</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>The Polytechnic Ibadan Oyo State Nigeria</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>2001 -
                  2003
                </h6>
                <p>Lower National Diploma in Accounting</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <i className="fa fa-facebook-official w3-hover-opacity"></i>
        <i className="fa fa-instagram w3-hover-opacity"></i>
        <i className="fa fa-snapchat w3-hover-opacity"></i>
        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
        <i className="fa fa-twitter w3-hover-opacity"></i>
        <i className="fa fa-linkedin w3-hover-opacity"></i>
      </footer>
      <link rel="manifest" href="/manifest.json" /><title>
        Akolade Oke Portfolio</title><link href="/static/css/main.d1b05096.chunk.css" rel="stylesheet" />
    </div>
  );
}
export default Home;
