import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <AppBar sx={{backgroundColor:'coral'}} position="static">
      <Toolbar >
      <Typography variant='h5'>Employee App</Typography>&nbsp;&nbsp;
      <Button variant='contained' color='success'>
       <Link to={'/add'} id ='vbutton' style={{color:'white'}}><b>Add Employee</b></Link>
      </Button>&nbsp;&nbsp;
      <Button id ='vbutton' variant='contained' color='warning'>
       <Link to={'/view'} id ='vbutton' style={{color:'white'}} ><b>View Employee</b></Link>
      </Button>&nbsp;&nbsp;
      </Toolbar>
      </AppBar>
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar
