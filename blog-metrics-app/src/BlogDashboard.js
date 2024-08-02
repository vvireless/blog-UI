import React, { useEffect, useState } from 'react';
import {
  Typography,
  Paper,
  Grid,
  Button,
  IconButton,
  AppBar,
  Toolbar,
} from '@mui/material';
import { AddCircle, Edit, Delete, Favorite } from '@mui/icons-material';
import { Card, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogDashboard = () => {
  const navigate = useNavigate();

  const handleDashboardNavigation = () => {
    navigate('/');
  };

  const loginNavigation = () => {
    navigate('/login');
  };

  const registerNavigation = () => {
    navigate('/register'); 
  };


  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/blogs'); // Replace with your server's endpoint
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const redirectToTest = () => {
    // Redirect to "/test"
    window.location.href = '/test';
  };
// backgroundColor: '#D4D2E6'
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#D4D2E6', marginBottom: '1rem' }} id='top_nav_bar' >
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontFamily: 'Inconsolata', color: 'white', marginLeft: '0.5rem' }}>
            Blog Dashboard 
          </Typography>
          <Button color="inherit" onClick={handleDashboardNavigation}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={loginNavigation}>
            Login
          </Button>
          <Button color="inherit" onClick={registerNavigation}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ padding: 8 }}>
          <Paper elevation={3} style={{ padding: '3rem', width: '92.3vw', margin: 0 }}>
          <Typography variant="h5" gutterBottom style={{ fontFamily: 'Inconsolata', marginTop: '-1.5rem' }}>
            Blog Posts
          </Typography>
            <Grid container spacing={3}>
              {data.map((blog) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={blog.id}>
                  <Card elevation={3} style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <CardContent style={{ fontFamily: 'Inconsolata, monospace', backgroundColor: '#f9f9f9', padding: '1.5rem' }}>
                      <Typography variant="h6" style={{ fontFamily: 'Inconsolata, monospace', color: '#333' }}>
                        {blog.title}
                      </Typography>
                      <Typography variant="caption" color="textSecondary" style={{ fontFamily: 'Inconsolata, monospace', color: '#777', marginTop: 1 }}>
                        Author: {blog.author}
                      </Typography>
                      <Typography variant="body2" style={{ fontFamily: 'Inconsolata, monospace', color: '#555' }}>{blog.blog}</Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton style={{ color: '#D2DEE6' }} aria-label="edit">
                        <Edit />
                      </IconButton>
                      <IconButton style={{ color: '#D4D2E6' }} aria-label="delete">
                        <Delete />
                      </IconButton>
                      <IconButton style={{ color: '#f5e5ea' }} aria-label="like">
                        <Favorite />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Button
              variant="contained"
              startIcon={<AddCircle />}
              onClick={redirectToTest}
              style={{ marginTop: '1rem', backgroundColor: '#D2DEE6' }}  // Use backgroundColor for button color
            >
              Add New Post
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogDashboard;