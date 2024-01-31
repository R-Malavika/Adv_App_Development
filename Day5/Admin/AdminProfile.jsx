import React, { useEffect, useState } from "react";
// import Header from "./Header";
import "../Componenets/profile.css";
import { Paper, Box, Avatar, Button } from "@mui/material";

import NavBar1 from "../NavBar1";


import { Link, Navigate, useNavigate } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";

const Profile1 = () => {
//   const [data, setData] = useState([]);
  
  return (
    <div
      style={{
        backgroundImage:
          'url("https://www.cimmyt.org/content/uploads/2019/03/7826549478_85ea36eae4_k.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "150vh",
      }}
    >
    <NavBar1/>
      {/* <Header type="noBack" home="nohome" about='false'  /> */}
   

      <div className="profilecontent">
        <div className="listt">
          <Box
            className="box1"
            sx={{
              "& > :not(style)": {
                width: 500,
                height: 450,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={10} className="paperpp">
              <div className="ava">
                <Avatar
               
                 src="https://www.nicepng.com/png/detail/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png"
                  sx={{
                    width: 60,
                    height: 70,
                    marginTop: "40px",
                    backgroundColor: "#ADD8E6",
                    color: "#000055",
                  }}
                />
              </div>
              
             <div className="prof"><center>
              <b/><br/>
               <b> User Details</b>
                <br/><br/>
                User Id:
                <br/><br/>
                Name:
                <br/>
                <br/>
                Email:
                <br></br>
                <br></br>
                Mobile Number:
                <br></br>
                <br/>
                <Link to="/adminHome"><Button class="logout-btn" >
                    Back To Home
                  </Button></Link>
             </center>

             </div>
             
            </Paper>
          </Box>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Profile1;