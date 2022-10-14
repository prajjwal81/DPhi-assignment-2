import React from "react";
import { Card, Button } from "react-bootstrap";
import Styles from "./cards.module.css";
import { NavLink } from "react-router-dom";

function ThirdPageCards() {
  return (
    <div>
      <div className={Styles.cardDiv}>
      <NavLink to="/ChallangeDetail">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img 
            variant="top"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg"
          />
          <Card.Body>
            <span className={Styles.headingInYellowBox}>Upcoming</span>
            <Card.Title></Card.Title>
            <Card.Text className={Styles.heading}>
              Data Science Bootcamp - Graded Datathon
            </Card.Text>
            <Card.Text>
              <span className={Styles.subheading}>Starts In</span>
              <br />
              <span className={Styles.timer}> 00 : 15 : 22</span>
              <br />
              <span className={Styles.cal}>
                {" "}
                Days &nbsp;&nbsp; Hours &nbsp;&nbsp;&nbsp;Min
              </span>
            </Card.Text>
            <Button variant="success" className={Styles.btn}>
              ⎷&nbsp;&nbsp;Participate Now <span className={Styles.c}>C</span>{" "}
            </Button>
          </Card.Body>
        </Card>
        </NavLink>
        <NavLink to="/ChallangeDetail">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/08/10/Pictures/_f6f87b80-dad4-11ea-88ef-3d2d7bb3ceb2.jpg"
          />
          <Card.Body>
            <span className={Styles.headingInYellowBox}>Upcoming</span>
            <Card.Title></Card.Title>
            <Card.Text className={Styles.heading}>
              Data Sprint 72 - Butterfly Identification
            </Card.Text>
            <Card.Text>
              <span className={Styles.subheading}>Starts In</span>
              <br />
              <span className={Styles.timer}> 00 : 12 : 34</span>
              <br />
              <span className={Styles.cal}> Days &nbsp;&nbsp; Hours &nbsp;&nbsp;&nbsp;Min</span>
            </Card.Text>
            <Button variant="success" className={Styles.btn}>
              ⎷&nbsp;&nbsp;Participate Now <span className={Styles.c}>C</span>{" "}
            </Button>
          </Card.Body>
        </Card>
        </NavLink>
         <NavLink to="/ChallangeDetail">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://images.everydayhealth.com/images/what-freezing-cold-temperatures-do-to-your-body-alt-1440x810.jpg?w=1110"
          />
          <Card.Body>
            <span className={Styles.headingInYellowBox}>Upcoming</span>
            <Card.Title></Card.Title>
            <Card.Text className={Styles.heading}>
              Data Sprint 71 - Weather Recognition
            </Card.Text>
            <Card.Text>
              <span className={Styles.subheading}>Starts In</span>
              <br />
              <span className={Styles.timer}> 01 : 17 : 10</span>
              <br />
              <span className={Styles.cal}> Days &nbsp;&nbsp; Hours &nbsp;&nbsp;&nbsp;Min</span>
            </Card.Text>
            <Button variant="success" className={Styles.btn}>
              ⎷&nbsp;&nbsp;Participate Now <span className={Styles.c}>C</span>{" "}
            </Button>
          </Card.Body>
        </Card>
        </NavLink>


        
      </div>

      <div className={Styles.cardDiv}>
      <NavLink to="/ChallangeDetail">
      <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202208/_chr7613-sixteen_nine.jpg?size=948:533"
          />
          <Card.Body>
            <span className={Styles.headingInYellowBox}>Upcoming</span>
            <Card.Title></Card.Title>
            <Card.Text className={Styles.heading}>
             Data Sprint 70 - Airline Passenger Satisfaction
            </Card.Text>
            <Card.Text>
              <span className={Styles.subheading}>Starts In</span>
              <br />
              <span className={Styles.timer}> 00 : 11 : 27</span>
              <br />
              <span className={Styles.cal}> Days &nbsp;&nbsp; Hours &nbsp;&nbsp;&nbsp;Min</span>
            </Card.Text>
            <Button variant="success" className={Styles.btn}>
              ⎷&nbsp;&nbsp;Participate Now <span className={Styles.c}>C</span>{" "}
            </Button>
          </Card.Body>
        </Card>
      </NavLink>

      <NavLink to="/ChallangeDetail">
       <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&w=2000&t=st=1665646772~exp=1665647372~hmac=f6bc779dfa422733521438f528251aa5c65bfa6676ffc43199eec065d94ea3f8"
          />
          <Card.Body>
            <span className={Styles.headingInYellowBox}>past</span>
            <Card.Title></Card.Title>
            <Card.Text className={Styles.heading}>
              Travel Insurance Claim Prediction
            </Card.Text>
            <Card.Text>
              <span className={Styles.subheading}>Ended On</span>
              <br />
              <span className={Styles.dateAndTime}>16th May'22 09:00 PM</span>
              <br />
            </Card.Text>
            <Button variant="success" className={Styles.btn}>
              ⎷&nbsp;&nbsp;Participate Now <span className={Styles.c}>C</span>{" "}
            </Button>
          </Card.Body>
       </Card>
       </NavLink>

       <NavLink to="/ChallangeDetail">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://www.tripuraindia.in/assets/upload_images/news_images/engineering-graduates.jpg"
          />
          <Card.Body>
            <span className={Styles.headingInYellowBox}>past</span>
            <Card.Title></Card.Title>
            <Card.Text className={Styles.heading}>
              Engineering Graduates Employment Outcomes
            </Card.Text>
            <Card.Text>
              <span className={Styles.subheading}>Ended On</span>
              <br />
              <span className={Styles.dateAndTime}>16th May'22 09:00 PM</span>
              <br />
            </Card.Text>
            <Button variant="success" className={Styles.btn}>
              ⎷&nbsp;&nbsp;Participate Now <span className={Styles.c}>C</span>{" "}
            </Button>
          </Card.Body>
        </Card>
        </NavLink>

      </div>
    </div>
  );
}

export default ThirdPageCards;
