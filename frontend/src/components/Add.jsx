import {  Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = (props) => {
  const [inputs, setinputs] = useState(props.data)
  console.log("props data:",props.data);
  console.log(" data:",inputs);
  const Navigate=useNavigate()
  const inputHandler=(e)=>{
    const {name,value}=e.target
  setinputs((prevData)=>({...prevData,[name]:value}))
  console.log(inputs)
  }
  const addHandler=()=>{
    console.log("btn clicked");
    if(props.method==="post"){
      axios.post("http://localhost:3007/create",inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data)
        Navigate('/view')
      })
      .catch((err)=>{
        console.log(err)
      })

    }
    if(props.method==="put"){
      axios.put(`http://localhost:3007/edit/`+inputs._id,inputs)
      alert("Data Update")
      Navigate('/add')
      setTimeout(()=>{
        Navigate('/view')
      },10)
    }
  }
  return (
    <div>
    
        <Typography variant='h3' align='center' >Add Employee</Typography><br /><br /><br />
        <TextField variant='outlined'  label="Name" name='eName' value={inputs.eName} onChange={inputHandler} style={{marginLeft:'42%'}}/><br /><br />
        <TextField variant='outlined' label="Age" name='eAge' value={inputs.eAge} onChange={inputHandler} style={{marginLeft:'42%'}} /><br /><br />
        <TextField variant='outlined' label="Position" name='ePosition' value={inputs.ePosition} onChange={inputHandler} style={{marginLeft:'42%'}} /><br /><br />
        <TextField variant='outlined' label="Salary" name='eSalary' value={inputs.eSalary} onChange={inputHandler} style={{marginLeft:'42%'}} /><br /><br />
        <Button variant='contained' style={{marginLeft:'42%'}}  onClick={addHandler}>Submit</Button>
      
    </div>
  )
}

export default Add
