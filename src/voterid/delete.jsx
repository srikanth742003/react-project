import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';

const Delete = () => {
  const [voterid, setVoterid] = useState('');
  const navigate = useNavigate();
  const handleVoteridChange = (event) => {
    setVoterid(event.target.value);
  };
 
    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:8080/dvoterid/${voterid}`)
          .then(result => {navigate('/register')
            console.log('Details deleted');
          });
      };
    
    return (
      <center>
      <Card align="center" elevation={20} style={{margin:"30px",width:"370px",padding:"14px", borderRadius:'20px'}}>
      <div className="polo">
        <div className="form animated bounceIn">
          <h1 className="heading1">DELETE FORM!</h1>
          <form>
            <input value={voterid} onChange={handleVoteridChange} type="text" placeholder="voterid" />
            <br/>
            <br/>
            <button onClick={handleDelete} className="animatedinfinitepulse">Delete</button>
          <br />
        </form>
      </div>
    </div>
    </Card>
    </center>
  );
};

export default Delete;