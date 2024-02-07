import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css'
import { Link } from 'react-router-dom';
import logo from '../asserts/election logo.png';
import { Typography } from '@mui/material';


const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the repository or service class
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/get') ; // Replace with your actual repository method
        setData(response.data); // Assuming the response contains an array of objects
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    
      <div> 
        <center>
          <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", fontSize: "30px" }}>
            <img src={logo} alt="" height={50} /><b>VOTER'S LIST</b>
          </Typography>
        </center>
    <table className="table">
      <thead>
        <tr>
          <th>voterid</th>
          <th>name</th>
          <th>fathername</th>
          <th>dob</th>
          <th>gender</th>
          <th>aadhar</th>
          <th>address</th>
          <th>mobile</th>
          
        </tr>
      </thead>
      <tbody>
      
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.voterid}</td>
            <td>{item.name}</td>
            <td>{item.fathername}</td>
            <td>{item.dob}</td>
            <td>{item.gender}</td>
            <td>{item.aadhar}</td>
            <td>{item.address}</td>
            <td>{item.mobile}</td>
            <td>
              {/* <Link to="/crud" onClick={() => handleUpdate(item.id)}>Update</Link> */}
      <Link to="/register">       <button>Update</button></Link> 
            </td>
            <td>

              {/* <Link to="/delete" onClick={() => handleDelete(item.id)}>Delete</Link> */}
       <Link to="/delete">    <button>Delete</button></Link>   
            </td>
          </tr>
        ))}
      </tbody>
    </table>
              </div>
  );
};

export default TableComponent;