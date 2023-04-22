import { Box } from '@mui/material'
import React from 'react'
import { Typography,styled } from '@mui/material'
import img from '../asserts/blog1.jpg'

export const Rightbar = () => {

  const RightBox = styled(Box)(({theme})=>({
    backgroundColor:'gray',
    flex:2,
    height:'100vh',
    width:'100%'
   
  }))


  return (

<RightBox>

<Box sx={{ width: "100%", height: "100%" }}>
          <img
            src={img}
            alt=".."
            style={{ width: "100%", height: '100%', objectFit: 'cover' }}
          />
        </Box>

</RightBox>


  )
}
