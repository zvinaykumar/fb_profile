import React from "react";
import "./content.css";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import FlagIcon from "@material-ui/icons/Flag";
import avtar from "./images/avtar.png"
// import Post from "./Post";
// import Friend from "./Friend";

import TuneIcon from "@material-ui/icons/Tune";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardSharpIcon from "@material-ui/icons/DashboardSharp";

function Content() {
  return (
    <div className="main-container">
      {/* LeftSide Container */}
      <div className="leftContainer">
        <div className="intro">
          <h2>Intro</h2>
          <div className="introItem">
            <HomeIcon />
            <p>Lives in Delhi</p>
          </div>
          <div className="introItem">
            <FavoriteIcon />
            <p>Single</p>
          </div>
          <div className="introItem">
            <HomeIcon />
            <p>Lives in Delhi</p>
          </div>
          <div className="introItem">
            <AccessTimeIcon />
            <p>Joined on May 2011</p>
          </div>
          <div className="introItem">
            <RssFeedIcon />
            <p>Followed by 225 People</p>
          </div>
          <div className="editDetails">
            <h4>Edit details</h4>
          </div>
          <div className="hobbies">
            <button>🚀 Learn to code</button>
            <button>💻 coding</button>
            <button>🏏Cricket</button>
            <button>🏏Cricket</button>
            <button>🏏Cricket</button>
            <button>🚶‍Hiking</button>
            <button>🧳Travelling</button>
          </div>
          <div className="editHobbies">
            <h4>Edit hobbies</h4>
          </div>
        </div>
        <div className="photosContainer">
          <div className="photoHeading">
            <h3>Photos</h3>
            <p>See All Photos</p>
          </div>
          <div className="imgCollection">
            <img
              src={avtar}
              alt=""
            />
            <img
            src={avtar}
              alt=""
            />
            <img
            src={avtar}
              alt=""
            />
            <img
            src={avtar}
              alt=""
            />
            <img
            src={avtar}
              alt=""
            />
            <img
            src={avtar}
              alt=""
            />
            <img
            src={avtar}
              alt=""
            />
            <img
            src={avtar}
              alt=""
            />
            <img
            src={avtar}
              alt=""
            />
          </div>
        </div>
        <div className="friendContainer">
          <div className="friendHeader">
            <div className="left-friendHeader">
              <h3>Friends</h3>
              <p>1,123 friends</p>
            </div>
            <div className="right-friendHeader">
              <p>See All Friends</p>
            </div>
          </div>
          <div className="friendContent">
              
            <div className="firstRow">
            
              {/* <Friend
                 image="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/165050856_3684994514932316_7026379627161408239_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=V5ENddEMiHwAX-bqWCy&tn=AFYTxNCmxpRUDOzs&_nc_ht=scontent.fdel18-1.fna&oh=60c1e0c1bb7837a82d45a13b2ad091cf&oe=60E11794"
                name="Deepak Kumar"
              />
              <Friend
                image="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/95894670_1584335808388138_7728236351375540224_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hGWt-owCHEwAX_DWU7P&_nc_ht=scontent.fdel18-1.fna&oh=6cd90baa9d85fd4ccad9f0bc96b27730&oe=60E1D747"
                name="Akshay Pm"
              />
              <Friend
                image="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/193658169_110257687935169_4415904009370244324_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=iIK_Ps59BHkAX_gowZV&tn=AFYTxNCmxpRUDOzs&_nc_ht=scontent.fdel18-1.fna&oh=f354f2bee4ba29e72cc3ac0b5dbab086&oe=60DE6326"
                name="Pramod Shah"
              /> */}
            </div>
            {/* <div className="secondRow">
              <Friend
                image="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/180132970_2928184474093070_4923543471634393889_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=rFERA6RnLyIAX9jx_zT&_nc_oc=AQkunjhpblnWriayZdDoL3XrF5AGjgG5OhJKsNVcm75xbs9XQByYI3uRO_AOAAjZXiM&tn=AFYTxNCmxpRUDOzs&_nc_ht=scontent.fdel18-1.fna&oh=1b34a5ba3fcbfa10f4c748ded64aa4a1&oe=60DF481B"
                name="Rajiv Yadav"
              />
              <Friend
                image="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/67759431_2373245199662329_1579835064781373440_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=n203VpjQ4Y0AX8pJBJF&_nc_ht=scontent.fdel18-1.fna&oh=e55fa7683ce2bf2e5e1bc1634f015642&oe=60E13E78"
                name="Abhishek Shah"
              />
              <Friend
                image="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/142915405_1585893888266961_3662752344811333309_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Fw0q16rWS1UAX_lfycz&_nc_ht=scontent.fdel18-1.fna&oh=babd2b218dee2049f06953b22069035c&oe=60DE636C"
                name="Prabin Yadav"
              />
            </div> */}
            {/* <div className="thirdRow">
              <Friend
                image="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/82818051_1763682400429494_781508048702144512_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=LU9mzxzQwggAX_QIKXu&_nc_oc=AQk6xsZ3FoiSgE8q3-V78liWtiAC5NqjZaiEQHMuCOIRYiBrnyIBimo2r-WYyWeR8Fs&_nc_ht=scontent.fdel18-1.fna&oh=a3635804bddeadb4886541a3c1c530d1&oe=60DF3661"
                name="Santy Franko"
              />
              <Friend
                image="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/95894670_1584335808388138_7728236351375540224_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hGWt-owCHEwAX_DWU7P&_nc_ht=scontent.fdel18-1.fna&oh=6cd90baa9d85fd4ccad9f0bc96b27730&oe=60E1D747"
                name="Er Raghu Sah"
              />
              <Friend
                image="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/45825003_1911672868929435_1908431536445718528_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Q4X2AV-NXpsAX95Gaab&_nc_ht=scontent.fdel18-1.fna&oh=b420e55992046ccd52e948525c66b31a&oe=60E0B8A2"
                name="Prateek Priyesh"
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* RightSide container */}
      <div className="rightContainer">
        <div className="createPost">
          <div className="newPost">
            <img src={avtar} alt="loading.."></img>
            <input type="text" placeholder="What's on your mind?" />
          </div>
          <div className="upload">
            <div className="uploadOption liveIcon">
              <VideoCallIcon />
              <h5>Live video</h5>
            </div>
            <div className="uploadOption photo-video">
              <PhotoLibraryIcon />
              <h5>Photo/Video</h5>
            </div>
            <div className="uploadOption lifeEvent">
              <FlagIcon />
              <h5>Life Events</h5>
            </div>
          </div>
        </div>

        <div className="postViewContainer">
          <div className="postViewHeading">
            <div className="postViewLeft">
              <h3>Posts</h3>
            </div>
            <div className="postViewRight">
              <div className="postFilter">
                <TuneIcon fontSize="small" />
                <p>Filters</p>
              </div>
              <div className="managePost">
                <SettingsIcon fontSize="small" />
                <p>Manage posts</p>
              </div>
            </div>
          </div>
          <div className="postViewMethod">
            <div className="listView">
              <MenuIcon fontSize="small" />
              <p>List view</p>
            </div>
            <div className="gridView">
              <DashboardSharpIcon fontSize="small" />
              <p>Grid view</p>
            </div>
          </div>
        </div>

        
        
        {/* <Post
          img="https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/89487914_2969683786486453_4578356144497491968_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=rznS-o8tB7UAX8lzME3&_nc_ht=scontent.fdel18-1.fna&oh=16fde5a6364d116d1fed8c1f5f6d67e1&oe=60DBFA9D"
          like="76"
          comment="15"
        />
        <Post
          img={
            "https://scontent.fdel18-1.fna.fbcdn.net/v/t1.6435-9/92213028_3034867249968106_3834453738517430272_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_ohc=b11Ei6BzIWMAX9W2cRG&_nc_ht=scontent.fdel18-1.fna&oh=19b33953803a9625a720d8e8e1e88481&oe=60DE2D9C"
          }
          like="180"
          comment="20"
        /> */}
      </div>
    </div>
  );
}

export default Content;