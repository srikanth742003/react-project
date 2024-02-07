import {React,useState} from 'react';
import {Button,TextField,Link,Box,Typography,Card} from '@mui/material';
import logo from '../asserts/election logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/validate/${email}/${password}`
      );
      
      if (response.data === true) {
        console.log('Successfully logged in');
        navigate('/home');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  function clickHandle(){
    navigate("/signup")
  }

  return (
    
    <center>
    <Card align="center" elevation={20} style={{margin:"30px",width:"370px",padding:"14px", borderRadius:'20px'}}>
    <img src={logo} alt="" height={50} />
            <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", fontSize: "30px" }}>
            <b>LOGIN</b></Typography>
            
            <Box component="form"   Validate onSubmit={handleSubmit} sx={{ mt: 2}}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoFocus
                onChange={handleEmailChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={handlePasswordChange}
              />
                <center>
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              </center>
              <br/>
              <Typography>Don't have an account?
              <Link onClick={clickHandle} variant="body3">
                  Sign Up
              </Link>
              </Typography>
              
            </Box>
          </Card>
          </center>

      
  );
}