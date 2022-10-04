import React from "react";
import "./ShowEvent.css";
import { GoLocation } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
// IoCalendarOutline;
export const ShowEvent = () => {
  return (
    <div className="eventManDiv">
      <div className="mai">
        <div className="leftEventDi">
          <div className="Birthdaybash">Birthday Bash</div>
          <div className="eventPhara">Hosted by Elysia</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              position: "absolute",
              left: "240px",
              top: "298px",
            }}
          >
            <div className="iconDiv">
              <IoCalendarOutline className="icon" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="startDate"> 18 August 6:00PM</div>
              <div className="endDate">to 19 August 1:00PM UTC +10</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              position: "absolute",
              left: "240px",
              top: "398px",
            }}
          >
            <div className="iconDiv">
              <GoLocation className="icon" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="location"> Street name</div>
              <div className="address">Street name Suburb, State, Postcode</div>
            </div>
          </div>
        </div>
        <div className="rightEventDiv"></div>
      </div>
    </div>
  );
};
