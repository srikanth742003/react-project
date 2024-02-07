import React from 'react';
import { Typography } from '@mui/material';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import logo from '../asserts/election logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1">
            <h2>HOME</h2>
          </MenuItem>
          
          <Link to="/register" ><MenuItem><button> Register Form </button></MenuItem></Link>
          <Link to='/voteridlist' ><MenuItem><button>Voter Id's List</button> </MenuItem></Link>
        </Menu>
      </Sidebar>

      <div className='login_background'>
        <center>
          <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", fontSize: "30px" }}>
            <img src={logo} alt="" height={50} /><b>VOTER ID APPLICATION</b>
          </Typography>
        </center>
      </div>
    </div>
  );
};

export default Home;

