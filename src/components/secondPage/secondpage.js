import React from "react";
import Style from "./secondPage.module.css";
import Cards from "./card";

function Secondpage() {
  return (
    <div className={Style.wholePage}>
      <div className={Style.heading}>
        Why Participate in 
        <span className={Style.greenHeading}> AI Challenges?</span>
      </div>

      <Cards />
    </div>
  );
}

export default Secondpage;
