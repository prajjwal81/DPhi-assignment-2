import React from "react";
import Style from "./thirdPage.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import ThirdPageCards from "./cards/cards";


function ThirdPage() {
  return (
    <div>
      <div className={Style.header}>
        <span className={Style.heading}>Explore Challenges</span>
        <textarea
          name="search"
          className={Style.searchbar}
          cols="30"
          rows="1"
          placeholder="search"
        ></textarea>

        <Dropdown className={Style.dropdowm}>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            style={{ height: "45px" }}
          >
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {" "}
            status
            <Dropdown.Item href="#/action-1"> ◻︎ All</Dropdown.Item>
            <Dropdown.Item href="#/action-2">◻︎ Active</Dropdown.Item>
            <Dropdown.Item href="#/action-3">◻︎ Upcoming</Dropdown.Item>
            <Dropdown.Item href="#/action-3">◻︎ Past</Dropdown.Item> <hr />
            level
            <Dropdown.Item href="#/action-1">◻︎ Easy</Dropdown.Item>
            <Dropdown.Item href="#/action-2">◻︎ Medium</Dropdown.Item>
            <Dropdown.Item href="#/action-3">◻︎ Hard</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <span className={Style.upcoming}> Upcoming ⌫</span>
        <span className={Style.past}> Past ⌫</span>
        <span className={Style.easy}>  Easy ⌫</span>
      </div>
      <div className={Style.secondpage}>

      <ThirdPageCards/>


    </div>
    </div>
  );
}

export default ThirdPage;
