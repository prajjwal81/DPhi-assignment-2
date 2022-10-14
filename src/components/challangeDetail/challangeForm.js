import React from "react";
import { Button, Navbar, Container} from "react-bootstrap";
import img from "../../Images/mainLogo.png";
import Styles from "./challangeForm.module.css"
import upload from "../../Images/upload.png"


function ChallangeForm() {
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
     <div className={Styles.boxBelowTheAttributes}></div><br /><br /><br />
     <div>Start date</div><br />
     <div className={Styles.boxBelowTheAttributes}><span className={Styles.textInsideTHeBoxOfDates}>Add Start Date</span></div><br /><br /><br />
     <div>End Date</div><br />
     <div className={Styles.boxBelowTheAttributes}><span className={Styles.textInsideTHeBoxOfDates}>Add End Date</span></div><br /><br /><br />
     <div>Description</div><br />
     <div className={Styles.boxOfDescription}></div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     <div>Image</div><br />
     <div className={Styles.boxOfImage}><span className={Styles.textInsideTHeBoxOfImage}>  Upload &nbsp; <img src={upload} alt="" /> </span> </div><br /><br /><br /><br />
     <div >Level Type</div><br />
     <div className={Styles.dropdown}><span className={Styles.textInsideTHeBoxOfDropdown}>Easy</span></div><br /><br /><br /><br /><br />
     <Button variant="success" size="lg" active>
        Create Challange
      </Button>

     </div>
    </div>
    </div>

  );
}


export default ChallangeForm;
