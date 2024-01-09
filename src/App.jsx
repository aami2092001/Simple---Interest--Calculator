import { TextField,Button,Stack } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
      const [interest,setInterest] = useState(0)
      const [principle,setPrinciple] = useState(0)
      const [rate,setRate] = useState(0)
      const [year,setYear] = useState(0)
      console.log(principle);
      const validateUserInputs = (e)=>{
        const {name,value} = e.tagert 
        console.log(`${name} , ${typeof value}`);
        console.log(!!value.match(/^[0-9]*.?[0-9]=$/));
      }
  return (
    <div style={{width: '100%' ,height: '100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
       <div style={{width: '600px'}} className='bg-light p-5 rounded'>
        <h3 style={{height:'35px'}}>Simple Interest Calculator</h3>
        <p>Calculate your simple interest Easily</p>
        <div  style={{width: '100%' ,height: '150px'}} className='d-flex justify-content-center align-items-center bg-warning mt-5 text-light shadow rounded flex-column'>
           <h1 style={{height: '50px'}}> ₹ {interest}</h1>
           <p className="fw-border">Total Simple Interest</p>
        </div>
        <form className='mt-5'>
            <div className='mb-3'>
               <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant='outlined' name='principle' value={principle || ""}  />
            </div>
            <div className='mb-3'>
               <TextField className='w-100' id="outlined-basic-rate" label="Rate of Interest (%)" variant='outlined' name='rate' value={rate || ""}  />
            </div>
            <div className='mb-3'>
               <TextField className='w-100' id="outlined-basic-time" label="Time Period (Yr)" variant='outlined' name='year' value={year || ""}  />
            </div>
            <Stack direction={'row'} spacing={2}>
            <Button type='submit' style={{height:'50px',width:'50%'}} className='bg-dark' variant="contained">CALCULATE</Button>
            <Button style={{height:'50px',width:'50%'}} className='text-dark' variant="outlined">RESET</Button>
            </Stack>
        </form>
       </div>
    </div>
  )
}

export default App
