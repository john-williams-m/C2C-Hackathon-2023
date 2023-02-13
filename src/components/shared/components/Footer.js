import { Box, Link, Typography } from "@mui/material";
import StyledBox from "../../widgets/StyledBox";
import LinkedInLogo from '../../../assets/LinkedIn.png'
import InstagramLogo from '../../../assets/Instagram.png'
import SVCELogo from '../../../assets/svce-white.png'

export default function Footer() {

    return (
        <StyledBox sx={{
            width: '100%',
            borderTop: `1px solid white`,
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'flex-start', md: 'space-evenly' },
            margin: 'auto 0rem',
            padding: '1rem 0rem'
        }}>
            {/* <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                bgcolor: 'crimson'
            }}>
                <NavLink to={'/'} className={(navData) => navData.isActive ? `${classes.links} ${classes.linksActive}` : `${classes.links}`}>HOME</NavLink>
                <NavLink to={'/tracks'} className={(navData) => navData.isActive ? `${classes.links} ${classes.linksActive}` : `${classes.links}`}>TRACKS</NavLink>
                <NavLink to={'/timeline'} className={(navData) => navData.isActive ? `${classes.links} ${classes.linksActive}` : `${classes.links}`}>TIMELINE</NavLink>
                <NavLink to={'/sponsors'} className={(navData) => navData.isActive ? `${classes.links} ${classes.linksActive}` : `${classes.links}`}>SPONSORS</NavLink>
                <NavLink to={'/faq'} className={(navData) => navData.isActive ? `${classes.links} ${classes.linksActive}` : `${classes.links}`}>FAQs</NavLink>
            </Box> */}
            <Box textAlign={'center'}>
                <Typography variant="body1" component={'p'} fontWeight={700}>Contact us</Typography>
                <StyledBox sx={{
                    justifyContent: 'space-evenly'
                }}>
                    <img width={'50px'} src={LinkedInLogo} alt='LinkedIn' />
                    <img width={'50px'} src={InstagramLogo} alt='Instagram' />
                </StyledBox>
                <Link href="mailto:c2cofficial@gmail.com" target={'_blank'} rel="noreferrer" sx={{
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 700
                }}>c2cofficial@gmail.com</Link> <br />
                <img width={'100px'} src={SVCELogo} alt='SVCE' />
            </Box>
        </StyledBox >
    )
}