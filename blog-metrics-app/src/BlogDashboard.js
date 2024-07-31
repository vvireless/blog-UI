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
import { AddCircle, Edit, Delete } from '@mui/icons-material';
import { Card, CardContent, CardActions } from '@mui/material';

const BlogDashboard = () => {
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

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Blog Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" gutterBottom style={{ paddingTop: '1rem', textAlign: 'center', fontFamily: 'Inconsolata', marginLeft: '1.2rem' }}>
        Blog Dashboard 📝
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h5" gutterBottom style={{ marginLeft: '3.5rem', fontFamily: 'Inconsolata' }}>
              Blog Posts
            </Typography>
            <ul>
              {data.map((blog) => (
                <Card key={blog.id} elevation={3} style={{ maxWidth: '800px', margin: '1rem'}}>
                  <CardContent style={{ fontFamily: 'Inconsolata, monospace' }}>
                    <Typography variant="h6" style={{ fontFamily: 'Inconsolata, monospace' }}>
                      {blog.title}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" style={{ fontFamily: 'Inconsolata, monospace' }}>
                      Author: {blog.author}
                    </Typography>
                    <Typography variant="body2" style={{ fontFamily: 'Inconsolata, monospace' }}>{blog.blog}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton style={{ color: '#D2DEE6' }} aria-label="edit">
                      <Edit/>
                    </IconButton>
                    <IconButton style={{ color: '#D4D2E6' }} aria-label="delete">
                      <Delete/>
                    </IconButton>
                  </CardActions>
                </Card>
              ))}
            </ul>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircle />}
              onClick={redirectToTest}
              style={{ marginLeft: '3.5rem' }}
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