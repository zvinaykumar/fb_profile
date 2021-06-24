import React from 'react'
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import cover from "./images/cover.jpg"
import avtar from "./images/avtar.png"
import "./Coverpage.css"
import Navbar from "./nav"





export const Cover=()=>(
    <div className="cover-container">
      <img
        src={cover} alt=""className="coverImg"/>
      <img
        src={avtar}
        alt=""
        className="profileImg"
      />
      
      <div className="addProfileImg">
        <CameraAltIcon />
      </div>
      <div className="editCoverImg">
        <CameraAltIcon />
        <p>Edit Cover Photo</p>
      </div>
      <div className="userTitle">
        <h1>vinay kumar</h1>
        <p className="edit">Edit</p>
      </div>
      <Navbar/>
    </div>
   
  );

