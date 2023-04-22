
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box,Container,Button, MenuItem,Menu, IconButton,Typography, Stack, styled} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Rightbar } from './Components/Rightbar';
import { LeftBar } from './Components/LeftBar';

const pages = ['Overview', 'Demo', 'Pages', 'Templates'];
const Demo = ['Demo Item1', 'Demo Item1', 'Demo Item3', 'Demo Item4'];
const page = ['Home','Menu','Blog'];
const templete = ['Templete1','Templete2','Templete3','Templete4'];
const purchase = ['purchese1','purchese2','purchese3','purchese4',]

export default function App() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElDemo, setAnchorElDemo] = React.useState(null);
    const [anchorElPages,setAnchorElPages] = React.useState(null);
    const [anchorElTemp,setAnchorElTemp] = React.useState(null);
    const[anchorElPurche,setAnchorElPurche] =React.useState(null);




    const handleOpenPurcheMenu = (event)=>{
        setAnchorElPurche(event.currentTarget)
    }

const handleOpenTempMenu=(event)=>{
    setAnchorElTemp(event.currentTarget)
}
    const handleOpenPagesMenu = (event)=>{
        setAnchorElPages(event.currentTarget)
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenDemoMenu = (event) => {
        setAnchorElDemo(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseDemoMenu = () => {
        setAnchorElDemo(null);
    };
    const handleClosePageMenu =()=>{
        setAnchorElPages(null);
    }
    const handleCloseTempMenu=()=>{
        setAnchorElTemp(null);
    }
    const handleClosePurchseMenu=()=>{
        setAnchorElPurche(null)
    }


    const  Pages = styled(Stack)(({ theme }) => ({
      display:'flex',
      flexDirection:'row',
      [theme.breakpoints.down('sm')]:{
        flexDirection:'column-reverse'
      }
      }))

    return (

      <Box>
        <AppBar position="static" sx={{bgcolor:'white'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        Timber
                    </Typography>

                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, ml: 'auto', mr: 0,color:'gray' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
                        <Button
                            sx={{ my: 2, display: 'block',textTransform:'capitalize',color:'gray' }}
                        >
                            Overview
                        </Button>
                        <Box sx={{ p: 0 }}>
                            <Button endIcon={<ArrowDropDownIcon />}   sx={{ my: 2, display: 'flex' ,textOverflow:'nowrap',textTransform:'capitalize',color:'gray'}} onClick={handleOpenDemoMenu}>
                                Demo
                            </Button>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElDemo}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElDemo)}
                                onClose={handleCloseDemoMenu}
                            >
                                {Demo.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseDemoMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>

                        </Box>

                        <Box sx={{ p: 0 }}>
                            <Button endIcon={<ArrowDropDownIcon />}   sx={{ my: 2, color: 'gray', display: 'flex' ,textOverflow:'nowrap',textTransform:'capitalize'}} onClick={handleOpenPagesMenu}>
                                pages
                            </Button>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElPages}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElPages)}
                                onClose={handleClosePageMenu}
                            >
                                {page.map((setting) => (
                                    <MenuItem key={setting} onClick={handleClosePageMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>

                        </Box>

                        <Box sx={{ p: 0 }}>
                            <Button endIcon={<ArrowDropDownIcon />}   sx={{ my: 2, color: 'gray', display: 'flex' ,textOverflow:'nowrap',textTransform:'capitalize'}} onClick={handleOpenTempMenu}>
                                Template
                            </Button>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElTemp}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElTemp)}
                                onClose={handleCloseTempMenu}
                            >
                                {templete.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseDemoMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>

                        </Box>

                        
                        <Box sx={{ p: 0 }}>
                        <Button    sx={{ my: 2,textTransform:'capitalize' ,color: 'white', display: 'flex' ,textOverflow:'nowrap'}} variant='contained' color='success' onClick={handleOpenPurcheMenu}>
                                Purchesenow
                            </Button>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElPurche}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElPurche)}
                                onClose={handleClosePurchseMenu}
                            >
                                {purchase.map((setting) => (
                                    <MenuItem key={setting} onClick={handleClosePurchseMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>

                        </Box>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
{/* // ------------------------------- */}



<Pages>
<LeftBar/>
<Rightbar/>
</Pages>

</Box>



    );
}