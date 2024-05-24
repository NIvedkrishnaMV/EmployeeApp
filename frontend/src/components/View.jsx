import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './navbar.css'
import { Link } from 'react-router-dom'
import Add from './Add'

const View = () => {
  var[empl,setempl]=useState([])
  var[update,setupdate]=useState(false)
  var[SingleValue,setsingleValue]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3007/view") //install cors in backend (npm i cors)
    .then((res)=>{
      console.log(res.data)
      setempl(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  const deleteValue=(id)=>{
    console.log(id)
    axios.delete(`http://localhost:3007/del/`+id)
    .then((response)=>{
      alert(response.data)
      window.location.reload(true)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const updateValue=(val)=>{
    console.log("Updated")
    setupdate(true)
    setsingleValue(val)
  }

    

      
      var finaljsx=<TableContainer className='tc' >
        <Typography variant='h4' align='center' >View Employee</Typography>
        <Table sx={{ minWidth: 650 }} >
            <TableHead  className='th'>
                <TableRow  className='tr'>
                <TableCell style={{fontFamily:'monospace' , fontSize:20}} className='tcell'>Employee_name</TableCell>
                <TableCell style={{fontFamily:'monospace' , fontSize:20}} className='tcell'>Employee_Age</TableCell>
                <TableCell style={{fontFamily:'monospace' , fontSize:20}} className='tcell'>Employee_position</TableCell>
                <TableCell style={{fontFamily:'monospace' , fontSize:20}} className='tcell'>Employee_salary</TableCell>
                
                </TableRow>
            </TableHead>
            <TableBody className='tb'>
              {empl?.map((val,i)=>{
                return(
                  <TableRow className='tr'>
                      <TableCell className='tcell'>{val.eName}</TableCell>
                      <TableCell className='tcell'>{val.eAge}</TableCell>
                      <TableCell className='tcell'>{val.ePosition}</TableCell>
                      <TableCell className='tcell'>{val.eSalary}</TableCell>
                      <TableCell className='tcell'>
                        <Button variant='contained' onClick={()=>updateValue(val)} color='primary'>
                          <Link>Update</Link>
                        </Button>
                      </TableCell>
                      <TableCell className='tcell'>
                        <Button variant='contained' onClick={()=>deleteValue(val._id)} color='primary'>
                          <Link>Delete</Link>
                        </Button>
                      </TableCell>
                  </TableRow>               
              
                )
              })}
              </TableBody>
        </Table>
      </TableContainer>

if(update) finaljsx=<Add data={SingleValue} method='put'/>

return finaljsx
}
export default View
