import React, { useState } from 'react';
import axios from 'axios';
import { Card,Typography,Button } from '@mui/material'
import { useNavigate } from 'react-router';

import logo from '../asserts/election logo.png';

const Registerform = () => {
  const [voterid, setVoterid] = useState('');
  const [name, setName] = useState('');
  const [fathername, setFathername] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleVoteridChange = (event) => {
    setVoterid(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFathernameChange = (event) => {
    setFathername(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAadharChange = (event) => {
    setAadhar(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
  


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        voterid:voterid,
        name:name,
        fathername:fathername,
        dob:dob,
        gender:gender,
        aadhar:aadhar,
        address:address,
        mobile:mobile,
      
    };
    axios.post('http://localhost:8080/post', data)
      .then(result => { navigate('/voteridlist');
        setVoterid(result.data.voterid);
        console.log(result.data);
      });
  };
  
  const handleUpdate = (event) => {
    event.preventDefault();
    const data = {
      voterid:voterid,
      name:name,
      fathername:fathername,
      dob:dob,
      gender:gender,
      aadhar:aadhar,
      address:address,
      mobile:mobile,
     
    };
    axios.put(`http://localhost:8080/put/${voterid}`, data)
      .then(result => {navigate('/voteridlist');
        console.log(result.data);
      });
  };
  return (
    <div className="polo">
      <div className="form animated bounceIn">
        <center>
        <Card align="center" elevation={20} style={{margin:"30px",width:"370px",padding:"14px", borderRadius:'20px'}}>
          <img src={logo} alt='' height={50} />
          <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", fontSize: "30px" }}>
           <b>REGISTER FORM</b></Typography> 
          
        
        <form>
          <input value={voterid} onChange={handleVoteridChange} type="text" placeholder="voterid" />
          <br/>
          <br/>
          <input value={name} onChange={handleNameChange} type="text" placeholder="name" />
          <br/>
          <br/>
          <input value={fathername} onChange={handleFathernameChange} type="text" placeholder="fathername" />
          <br/>
          <br/>
          <input value={dob} onChange={handleDobChange} type="text" placeholder="dob" />
          <br/>
          <br/>
          <input value={gender} onChange={handleGenderChange} type="text" placeholder="gender" />
          <br/>
          <br/>
          <input value={aadhar} onChange={handleAadharChange} type="text" placeholder="aadhar" />
          <br/>
          <br/>
          <input value={address} onChange={handleAddressChange} type="text" placeholder="address" />
          <br/>
          <br/>
          <input value={mobile} onChange={handleMobileChange} type="text" placeholder="mobile" />
          <br/>
          <br/>
          <Button
          onClick={handleSubmit}
                type="submit"
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                ADD
              </Button>
              <br/>
              <Button
                onClick={handleUpdate}
                type="submit"
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                UPDATE
              </Button>
        </form>
        </Card>
        </center>
      </div>
    </div>
  );
};

export default Registerform;