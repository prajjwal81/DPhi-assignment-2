import React from "react";
import Styles from "./participation.module.css";
import { Navbar, Container,  } from "react-bootstrap";
import img from "../../Images/mainLogo.png";

function Participation() {
  return (
    <div className="container">
      <div className={Styles.nav}>
        <Navbar>
          <Container>
            <Navbar.Brand>
              <img src={img} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </div>

      <div className={Styles.firstHeader}>
        <div className={Styles.yellowBox}> ⥀ &nbsp;   Starts on 17th Jun'22 09:00 PM (India Standard Time)</div>
        <div className={Styles.heading}>Data Sprint 72 - Butterfly Identification</div>
        <div className={Styles.subHeading}>Identify the class to which each butterfly belongs to</div>
        <div className={Styles.easy}>Easy</div>
      </div>

      <div className={Styles.mid}>
       <div className={Styles.forGreenLine}> <span className={Styles.overview}> Overview </span>
         <div className={Styles.btnBox}>
         <span className={Styles.startBtn}>Edit  </span>
         <span className={Styles.deleteBtn}>Delete</span>
         </div>
         </div>
        
      </div>

      <div className={Styles.belowMid}></div>

     <div style={{backgroundColor:" #FFFFFF" , height:" 322px"}}>
     <div className={Styles.footer}>
        Butterflies are the adult flying stage of certain insects belonging to
        an order or group called Lepidoptera. The word "Lepidoptera" means
        "scaly wings" in Greek. This name perfectly suits the insects in this
        group because their wings are covered with thousands of tiny scales
        overlapping in rows. An agency of the Governmental Wildlife Conservation
        is planning to implement an automated system based on computer vision so
        that it can identify butterflies based on captured images. As a
        consultant for this project, you are responsible for developing an
        efficient model. Your Task is to build an Image Classification Model
        using CNN that classifies to which class of weather each image belongs
        to.
      </div>
     </div>
    </div>
  );
}

export default Participation;
