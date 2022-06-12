import React from "react";
import pic from "../img/profilepic.jpg";

function profilePhoto() {
  return (
    <div className="profile-photo-container">
      <img className="profile-photo" src={pic} alt="profilePicture"/>
    </div>
  );
}

export default profilePhoto;
