import React,{useState} from 'react'
import { FormControl, Input,FormLabel,FormControlLabel,RadioGroup,Radio } from '@mui/material'
import { SearchBox} from '@mapbox/search-js-react'

function Form() {
  const [value,setValue]=useState('')
  return (
    <form>
         <Input type='text' placeholder='name'/>
         <Input type='number' placeholder='age'/>
         <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <SearchBox value={value} onChange={(e)=>setValue(e.target.value)} accessToken={'sk.eyJ1Ijoic2FoaWwtbSIsImEiOiJjbDVudXN5ZHkxN205M2lwanQ1Z2xoMHNkIn0.RvVlBhKhgQ9rNG8lrT4dtw'}/>
    </form>
  )
}

export default Form
