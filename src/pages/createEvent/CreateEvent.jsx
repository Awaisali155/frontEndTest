import React from "react";
import "./CreateEvent.css";
import { Link } from "react-router-dom";
export const CreateEvent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#EDE5FF",
        display: "inline-block",
      }}
    >
      <div className="ceateEvent">
        <h1 style={{ padding: "10px", color: "#240D57" }}>Create Event</h1>
        <form className="form">
          <div className="formDiv">
            <label htmlFor="">Event name</label>
            <input className="inputs" type="text" />
          </div>
          <div className="formDiv">
            <label htmlFor=""> Host name</label>
            <input className="inputs" type="text" />
          </div>
          <div className="formDiv">
            <label htmlFor=""> Start date</label>
            <input className="inputs" type="text" />
          </div>
          <div className="formDiv">
            <label htmlFor="">End date</label>
            <input className="inputs" type="text" />
          </div>
          <div className="formDiv">
            <label htmlFor="">Location</label>
            <input className="inputs" type="text" />
          </div>
          <div className="Fileinput" s>
            <label htmlFor=""> Event photo </label>
            <input type="file" />
          </div>
          <div className="formDiv">
            <button className="Nextbtn">
              <Link to="/event" className="link">
                Next
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
