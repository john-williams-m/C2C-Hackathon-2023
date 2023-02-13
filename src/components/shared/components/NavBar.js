import { Menu } from "@mui/icons-material";
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import C2CLogo from '../../../assets/c2c-logo.png'
import SVCELogo from '../../../assets/svce-white.png'

import classes from "./NavBar.module.css"

export default function NavBar() {

    const theme = useTheme()
    const navigate = useNavigate()
    const MobileScreenSize = useMediaQuery('(max-width:400px)');

    const [showDrawer, setShowDrawer] = useState(false)

    const handleDrawerToggle = () => {
        setShowDrawer(prev => !prev)
    }

    return (
        <Fragment>
            <AppBar component="nav" position="sticky" >
                <Toolbar sx={{
                    bgcolor: theme.palette.background.default
                }}>
                    <Box width={'100vw'} display={'flex'} justifyContent='space-between' alignItems={'center'}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <Menu />
                        </IconButton>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems='center'>
                            <img width={'50px'} src={C2CLogo} alt='C2C Club' />
                        </Box>
                    </Box>
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                        width: '100vw',
                        bgcolor: theme.palette.background.default
                    }}>
                        <Box>
                            <img width={'50px'} src={C2CLogo} alt="C2C-Logo" />
                        </Box>
                        <Box display={'flex'} width={'40vw'} justifyContent={'space-evenly'} alignItems='center'>
                            <img width={'100px'} height={'35px'} src={SVCELogo} alt="svce-logo" />
                            <Typography variant="body1" fontWeight={700}>COMPETE TO COMPUTE CLUB</Typography>
                        </Box>
                        <Box display={'flex'} justifyContent='space-evenly' alignItems={'center'} width={'50vw'}>
                            <NavLink to={'/'} className={(navData) => navData.isActive ? `${classes.links} ${classes.linksActive}` : `${classes.links}`}>HOME</NavLink>
                            <NavLink to={'/tracks'} className={(navData) => navData.isActive ? `${classes.links} ${classes.linksActive}` : `${classes.links}`}>TRACKS</NavLink>
                            <NavLink to={'/timeline'} className={(navData) => navData.isActive ? `${classes.links} ${classes.linksActive}` : `${classes.links}`}>TIMELINE</NavLink>
                            <NavLink to={'/sponsors'} className={(navData) => navData.isActive ? `${classes.links} ${classes.linksActive}` : `${classes.links}`}>SPONSORS</NavLink>
                            <NavLink to={'/faq'} className={(navData) => navData.isActive ? `${classes.links} ${classes.linksActive}` : `${classes.links}`}>FAQ'S</NavLink>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={showDrawer}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' }, bgcolor: 'rgba(0,0,0,0.8)',
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '250px', bgcolor: 'rgba(0,0,0,0.8)' },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'rgba(0,0,0,0.5)' }} height='100vh' >
                        <Box display={'flex'} justifyContent='space-evenly' alignItems={'center'}>
                            <img width={'50px'} height={'50px'} src={C2CLogo} alt='C2C' />
                            <Box>
                                <Typography variant="h6" sx={{ my: 2 }} fontWeight={700}>
                                    C2C CLUB
                                </Typography>
                            </Box>
                        </Box>
                        <Divider />
                        <List sx={{
                            '& .MuiTypography-root': {
                                color: MobileScreenSize ? theme.palette.text.primary : ''
                            }
                        }}>
                            <ListItem onClick={() => { navigate('/') }} key={'HOME'} disablePadding sx={{ color: 'white', "&:hover": { color: 'black' } }}>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText>
                                        <Typography variant="body1" fontWeight={700}>HOME</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem onClick={() => { navigate('/tracks') }} key={'TRACKS'} disablePadding sx={{ color: 'white', "&:hover": { color: 'black' } }}>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText>
                                        <Typography variant="body1" fontWeight={700}>TRACKS</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem onClick={() => { navigate('/timeline') }} key={'TIMELINE'} disablePadding sx={{ color: 'white', "&:hover": { color: 'black' } }}>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText>
                                        <Typography variant="body1" fontWeight={700}>TIMELINE</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem onClick={() => { navigate('/sponsors') }} key={'SPONSORS'} disablePadding sx={{ color: 'white', "&:hover": { color: 'black' } }}>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText>
                                        <Typography variant="body1" fontWeight={700}>SPONSORS</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem onClick={() => { navigate('/faq') }} key={'FAQ\'S'} disablePadding sx={{ color: 'white', "&:hover": { color: 'black' } }}>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText >
                                        <Typography variant="body1" fontWeight={700}>FAQ'S</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </Fragment>
    )
}