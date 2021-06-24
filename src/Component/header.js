import React from 'react'
import "./header.css"
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import GroupIcon from "@material-ui/icons/Group";
import { Avatar } from "@material-ui/core";

import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import fb from "./images/fb.png"
export default function Header(){
    return(
        <div className="header">
      {/* Header Left */}
      <div className="headerLeft">
        <img src={fb} alt="" />
        <div className="headerInput">
        <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      {/* Header Middle */}
      <div className="headerMiddle">
        <div className="headerOption">
          <HomeIcon fontSize="large" />
        </div>
        <div className="headerOption">
          <OndemandVideoIcon fontSize="large" />
        </div>
        <div className="headerOption">
          <GroupIcon fontSize="large" />
        </div>
        <div className="headerOption">
          <ViewQuiltIcon fontSize="large" />
        </div>
      </div>
      {/* Header Right */}
      <div className="headerRight">
        <div className="headerInfo">
          <Avatar />
          <h4>vinay</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}