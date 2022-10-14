import React from "react";
import { Button, Navbar, Container} from "react-bootstrap";
import img from "../../Images/mainLogo.png";
import Styles from "./challangeDetail.module.css"
import imgLogo from "../../Images/imageLogo.png"
import { NavLink } from "react-router-dom";


function ChallangeDetail() {
  return (
<div className="container" style={{backgroundColor:"black"}}>
    <div className={Styles.mainDiv}>
    <Navbar className={Styles.nav}>
        <Container>
          <Navbar.Brand>
            <img src={img} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
     
      <br />

      <div expand="lg"  bg="light" className={Styles.challangeDetail}>
      <span className={Styles.heading}> Challange Details</span>
      </div><br /><br />

     <div className={Styles.formDiv}>
     <div>Challange Name</div><br />
     <div className={Styles.boxBelowTheAttributes}><span className={Styles.textInsideTHeBox}>Data Sprint 72 - Butterfly Identification</span></div><br /><br /><br />
     <div>Start date</div><br />
     <div className={Styles.boxBelowTheAttributes}><span className={Styles.textInsideTHeBoxOfDates}>17th Jun'22 09:00 PM</span></div><br /><br /><br />
     <div>End Date</div><br />
     <div className={Styles.boxBelowTheAttributes}><span className={Styles.textInsideTHeBoxOfDates}>21st Jun'22 11:00 PM</span></div><br /><br /><br />
     <div>Description</div><br />
     <div className={Styles.boxOfDescription}>Identify the class to which each butterfly belongs to</div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     <div>Image</div><br />
     <div className={Styles.boxOfImage}> <img src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/08/10/Pictures/_f6f87b80-dad4-11ea-88ef-3d2d7bb3ceb2.jpg" style={{width:"249px" ,height: "122.39px" , borderRadius:"10px"}} alt="" />

     <div className={Styles.imageChangeName}>
       <img src={imgLogo} alt="" /> Change Image →
     </div>
     </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


     <div >Level Type</div><br />
     <div className={Styles.boxBelowTheAttributes}><span className={Styles.textInsideTHeBoxOfLevel}>Easy</span></div><br /><br /><br /><br /><br />
      <NavLink to="/">
     <Button variant="success" size="lg" active>
        Save Changes
      </Button>
      </NavLink>

     </div>
    </div>
    </div>

  );
}


export default ChallangeDetail;
