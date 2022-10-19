import React from "react";
import coverImage from "../../img/cover.jpg";
import ProfileImage from "../../img/profileImg.jpg";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="ProfileImage">
        <img src={coverImage} alt="loading" />
        <img src={ProfileImage} alt="loading" />
      </div>
      <div className="ProfileName">
        <span>deepak</span>
        <span>electrical engineer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>1000</span>
            <span>Following</span>
          </div>

          <div className="vl"></div>
          <div className="follow">
            <span>9</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      <span>
        my profile
      </span>
    </div>
  );
}

export default ProfileCard;
