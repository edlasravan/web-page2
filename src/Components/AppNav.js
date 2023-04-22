import React, { useState } from 'react'
import {AppBar, Button,  Tab, Tabs, Toolbar, Typography,Box,Paper, Popover} from '@mui/material';
import styled from '@emotion/styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ResAppBar= () => {


const TextTras=styled(Tab)({
    textTransform:"capitalize",
    fontSize:'18px',
    color:'gray'
})

const [anchor,setAnchor]=useState(null);
 const openPopOver=(e)=>{
  setAnchor(e.currentTarget);
 }
 const [pages,setPages]=useState(null);
 const pagePopOver=(e)=>{
  setPages(e.currentTarget);
 }
 const [demo,setDemo]=useState(null);
 const demoPop=(e)=>{
  setDemo(e.currentTarget);
 }

// const Item=styled(Paper)({
//     backgrounPosition:'cover',
//     color:"darkcyan"
// })

  return (
<>
    <AppBar sx={{bgcolor:'white',position:'fixed'}}>
        <Toolbar sx={{mr:"350px"}}>
            <Typography variant='h3' component="span" sx={{letterSpacing:'2px',color:'black', marginLeft:'200px', textTransform:'capitalize',fontSize:'27px',fontWeight:'bold',fontFamily:'Times New Roman',opacity:0.8}}>Timber</Typography>
            <Tabs sx={{marginLeft:'auto',mr:'100px'}} textColor='inherit'>
                <TextTras label='Overview'/>
                <Button sx={{textTransform:'capitalize',color:'gray',fontSize:'16px'}} endIcon={<ArrowDropDownIcon disabled/>} onClick={openPopOver}>Demo</Button>
                <Popover open={Boolean(anchor)} anchorEl={anchor} anchorOrigin={{vertical:"bottom",horizontal:'left'}} transformOrigin={{vertical:"bottom",horizontal:"center"}} onClose={()=>setAnchor(null)}>
                   <Box sx={{display:'inline'}}>
                        <Button >Demo</Button><br/>
                        <Button >Demo</Button><br/>
                        <Button >Demo</Button><br/>
                        <Button >Demo</Button><br/>  
                   </Box>
                     
                   </Popover>
                <Button endIcon={<ArrowDropDownIcon disabled/>} sx={{textTransform:'capitalize',color:'gray',fontSize:'16px'}} onClick={pagePopOver}>Pages</Button>
                <Popover open={Boolean(pages)} pagesEl={pages} pagesOrigin={{vertical:"bottom",horizontal:'left'}} transformOrigin={{vertical:"bottom",horizontal:"center"}} onClose={()=>setPages(null)}>
                <Box>
                        <Button>pages</Button><br/>
                        <Button>pages</Button><br/>
                        <Button>pages</Button><br/>
                   </Box>
                     
                   </Popover>
                <Button endIcon={<ArrowDropDownIcon disabled/>} sx={{textTransform:'capitalize',color:'gray',fontSize:'16px'}} onClick={demoPop} >Templates</Button>
                <Popover open={Boolean(demo)} demoEl={demo} demoOrigin={{vertical:"bottom",horizontal:'left'}} transformOrigin={{vertical:"bottom",horizontal:"center"}} onClose={()=>setDemo(null)}>
                <Box>
                        <Button>Templates</Button><br/>
                        <Button>Templates</Button><br/>
                        <Button>Templates</Button><br/>
                   </Box>
                     
                   </Popover>
            </Tabs>
            <Button sx={{padding:'10px'}} variant='contained'  color="success">Purchase now</Button>
        </Toolbar>
    </AppBar>
  
 


</>
  )
}

export default ResAppBar