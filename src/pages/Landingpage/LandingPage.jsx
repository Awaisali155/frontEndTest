import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { MdCelebration } from "react-icons/md";
export const LandingPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#EDE5FF",
        display: "inline-block",
      }}
    >
      <div className="parentDiv">
        <div className="rightDiv"></div>
        <div className="LeftDiv">
          <div className="text1">imagine if</div>
          <div className="text2">Snapchat</div>
          <div className="text3">had events.</div>
          <div className="pharagraph">
            Easily host and share events with your friends across any social
            media.
          </div>
          <div className="createBtn">
            <button className="btn">
              <MdCelebration style={{ color: "gold" }} />

              <Link to="/create" className="link">
                Create my event
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
