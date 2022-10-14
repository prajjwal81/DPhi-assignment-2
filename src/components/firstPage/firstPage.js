import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import Secondpage from "../secondPage/secondpage";
import ThirdPage from "../thirdPage/thirdPage";
import Style from "./firstPage.module.css";
import img from "../../Images/mainLogo.png"
import line from "../../Images/line.png";
import rocket from "../../Images/rocket.png";
import logoOuter from "../../Images/logoOuter.png";
import logo2 from "../../Images/logo2.png";
import logo3 from "../../Images/logo3.png";
import { NavLink } from "react-router-dom";


function MainPage() {
  return (
      <div className="container"  >
      <div className={Style.nav}>
        <Navbar >
        <Container>
          <Navbar.Brand>
            <img src={img} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        </Container>
      </Navbar></div>
      <div className={Style.firstPage}>
        <div className={Style.rectangle}>
          Accelerate Innovation with Global AI Challenges
        </div>
        <div className={Style.secondRectangle}>
          AI Challenges at DPhi simulate real-world problems. It is a great
          place to put your AI/Data Science skills to test on diverse datasets
          allowing you to foster learning through competitions.
        </div>
        <NavLink to="/ChallangeForm">
        <Button variant="light" size="lg" className={Style.btn}>
        Create Challenge
        </Button>
        </NavLink>

        <img src={line} alt="" className={Style.line} />
        <img src={rocket} alt="" className={Style.rocket} />
      </div>

      <div className={Style.firstPagefooter}>
        <span className={Style.hundredK}>100k+</span>
        <span className={Style.fiftyK}>50k+</span>
        <span className={Style.hundred}>100+</span>
        <span className={Style.belowHundredK}>AI model submissions</span>
        <span className={Style.belowFiftyK}>Data Scientists</span>
        <span className={Style.belowHundred}>AI Challenges hosted</span>
        <span className={Style.verticalLine}>|</span>
        <span className={Style.verticalLine2}>|</span>

        <div className={Style.divOfLogo}>
          <img src={logoOuter} alt="" className={Style.logoOuter} />
          <div className={Style.al}>Al</div>
        </div>
        <div className={Style.divOfLogo2}>
          {" "}
          <img src={logo2} alt="" className={Style.logoOuter} />
          <div className={Style.dott}></div>
        </div>
        <div className={Style.divOfLogo3}>
          {" "}
          <img src={logo3} alt="" className={Style.logoOuter} />
        </div>


        <img src={logo3} alt="" className={Style.Logo} />
      </div>
      <Secondpage/>
      <ThirdPage/>

      
    </div>
  );
}

export default MainPage;
