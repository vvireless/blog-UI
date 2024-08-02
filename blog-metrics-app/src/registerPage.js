import React, { useState } from 'react';
import { Typography, Paper, Grid, Button, TextField, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleDashboardNavigation = () => {
    navigate('/');
  };

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Username:', username);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#D4D2E6', marginBottom: '1rem' }} id='top_nav_bar' elevation={0}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontFamily: 'Inconsolata', color: 'white', marginLeft: '0.5rem' }}>
            Register Page
          </Typography>
          <Button color="inherit" onClick={handleDashboardNavigation}>
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
      <Paper sx={{ padding: '2rem', margin: '2rem' }}>
        <Typography variant="h4" gutterBottom style={{fontFamily: 'Inconsolata'}} marginBottom='2rem'>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" style={{backgroundColor: '#D2DEE6'}} >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default RegisterPage;