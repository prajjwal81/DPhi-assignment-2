import React from "react";
import { Card } from "react-bootstrap";
import Style from "./card.module.css";
import logo1 from "../../Images/secondpagelogo1.png"
import arrow from "../../Images/cardArrowLogo.png";
import secondLogo from "../../Images/secondPageSecondCardLogo.png";


function Cards() {
  return (
    <div className={Style.card}>
      <div style={{marginRight:"10px"}}>
        <Card
          style={{ width: "545px", height: "276px", background: "#F8F9FD" }}
        >
          <div style={{ height: "85px" }}>
            <span className={Style.arrowLogo}>
              <img src={arrow} alt="" />
            </span>
            <img src={logo1} alt="" className={Style.logo1} />
          </div>
          <Card.Body>
            <Card.Title className={Style.fontstyle}>
              Prove Your Skill
            </Card.Title>
            <Card.Text className={Style.textstyle}>
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </Card.Text>
          </Card.Body>
        </Card>
        <br /><br />

        <Card
          style={{ width: "545px", height: "276px", background: "#F8F9FD" }}
        >
          <div style={{ height: "85px" }}>
            <span className={Style.squareOfThirdLogo}></span>
            <span className={Style.eyeOfThirdLogo}></span>
            <span className={Style.SecondEyeOfThirdLogo}></span>
            <span className={Style.mouthOfLogo}></span>
            <span className={Style.teethOfLogo}></span>
            <span className={Style.SteethOfLogo}></span>
            <span className={Style.hornOfLogo}></span>
          </div>
          <Card.Body>
            <Card.Title className={Style.fontstyle}>
              Learn from community
            </Card.Title>
            <Card.Text className={Style.textstyle}>
              One can look and analyze the solutions submitted by the other Data
              Scientists in the community and learn from them.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
       
      <div style={{marginLeft:"10px"}}>
        <Card
          style={{ width: "545px", height: "276px", background: "#F8F9FD" }}
        >
          <div style={{ height: "85px" }}>
            <img src={secondLogo} alt="" className={Style.logo1} />
          </div>
          <Card.Body>
            <Card.Title className={Style.fontstyle}>
              Challenge yourself
            </Card.Title>
            <Card.Text className={Style.textstyle}>
              There is nothing for you to lose by participating in a challenge.
              You can fail safe, learn out of the entire experience and bounce
              back harder.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <br />

        <Card
          style={{ width: "545px", height: "276px", background: "#F8F9FD" }}
        >
          <div style={{ height: "85px" }}>
            <span className={Style.squareOfFourthLogo}></span>
            <span className={Style.headOfFourthLogo}></span>
            <span className={Style.arcOfFourthLogo}>⏜</span>
            <span className={Style.lineOfFourthLogo}></span>
            <span className={Style.line2OfFourthLogo}></span>
          </div>
          <Card.Body>
            <Card.Title className={Style.fontstyle}>
              Earn recognition
            </Card.Title>
            <Card.Text className={Style.textstyle}>
              You will stand out from the crowd if you do well in AI challenges,
              it not only helps you shine in the community but also earns
              rewards.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
