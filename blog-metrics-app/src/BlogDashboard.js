import React from 'react';  
import { Typography, Paper, Grid, Button, IconButton } from '@mui/material';  
import { AddCircle, Edit, Delete } from '@mui/icons-material';  
import { useEffect, useState } from 'react';  
  
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
  return (  
    <div>  
      <Typography variant="h4" gutterBottom>  
        Blog Dashboard  
      </Typography>  
      <Grid container spacing={3}>  
        <Grid item xs={12}>  
          <Paper elevation={3} style={{ padding: '1rem' }}>  
            <Typography variant="h5" gutterBottom>  
              Blog Posts  
            </Typography>  
            {/* Render a list of blog posts */}  
            <ul>  
            {data.map((blog) => (  
                 <li>  
                 <Typography variant="subtitle1">  
                   {blog.title}
                 </Typography>  
                 <Typography variant="body1">  
                   {blog.blog}  
                    </Typography>
                 <IconButton color="primary" aria-label="edit">  
                   <Edit />  
                 </IconButton>  
                 <IconButton color="secondary" aria-label="delete">  
                   <Delete />  
                 </IconButton>  
               </li>   
            ))} 
            </ul>  
            <Button  
              variant="contained"  
              color="primary"  
              startIcon={<AddCircle />}  
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
