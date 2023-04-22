import { Box } from '@mui/material'
import React from 'react'
import {  styled,Button,Typography } from '@mui/material'

export const LeftBar = () => {
  const LeftBox = styled(Box)(({theme})=>({
    flex:2,
    height:'100vh',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
   
  }));
  const TextBox = styled(Typography)(({theme})=>({
    fontWeight: 'bold', 
    fontFamily: 'Times New Roman',
    fontSize:'40px',
    position:'relative',
    [theme.breakpoints.up('md')]:{
      fontSize:'50px',
    }
   
  }))

  return (
    <LeftBox>
            <Box sx={{position:'relative',marginLeft:'15px'}}>

            <TextBox >Establish an</TextBox>
            <TextBox bottom='20px'> online</TextBox>
            <TextBox bottom='40px'>presence.</TextBox>
            <Typography position='relative' bottom='30px'>Timber is a complete design system for Webflow.</Typography><br />
            <Box position='relative' bottom='25px'sx={{display:{xs:'block',sm:'flex'}}}>
              <Button sx={{ mr: 2, fontSize: { xs: '15px', md: '17px' }, textTransform: 'capitalize' }} variant="contained" color='success'>Explore layouts</Button>
              <Button sx={{ fontSize: { xs: "13px", md: '17px', textTransform: 'capitalize' },marginTop:{xs:'5px'} }} variant="outlined" color='success'>Purchase</Button>
            </Box>
        
          
        </Box>
    
    </LeftBox>
  )
}
