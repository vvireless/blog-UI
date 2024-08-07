import React, { useState } from 'react';
import {
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  AppBar,
  Toolbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const navigate = useNavigate();

  const handleDashboardNavigation = () => {
    navigate('/');
  };
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Content:', content);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#D4D2E6', marginBottom: '1rem' }} id='top_nav_bar' elevation={0}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontFamily: 'Inconsolata', color: 'white', marginLeft: '0.5rem' }}>
            Create Post
          </Typography>
          <Button color="inherit" onClick={handleDashboardNavigation}>
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
      <Paper sx={{ padding: '2rem', margin: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Create a New Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Content"
                fullWidth
                multiline
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default CreatePostPage;