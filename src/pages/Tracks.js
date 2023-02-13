import { Box, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment } from "react";
import TrackBgImg from '../assets/tracks-bg.png'
import StyledBox from "../components/widgets/StyledBox";
import VectorImg1 from '../assets/Group-1.png'
import VectorImg2 from '../assets/Group-2.png'

const TrackBox = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${TrackBgImg})`,
    objectFit: 'contain',
    color: theme.palette.text.secondary,
    padding: '1rem',
    margin: '1rem',
    width: '70vw',
    borderRadius: 20
}))

export default function Tracks() {

    const NonMobileScreenSize = useMediaQuery('(min-width:900px)')

    const theme = useTheme()
    return (
        <Fragment>
            <Box width={"100%"} sx={{
                position: 'relative',
                paddingBottom: NonMobileScreenSize ? '11rem' : '2rem',
            }}>
                {NonMobileScreenSize && <img style={{ width: '6rem', position: 'absolute', top: 25 }} src={VectorImg1} alt="vector" />}
                {NonMobileScreenSize && <img style={{ width: '14rem', position: 'absolute', right: 0, bottom: 0, zIndex: -10 }} src={VectorImg2} alt="vector" />}
                <StyledBox flexDirection={'column'}>
                    <Typography variant="h2" component={'h2'} color={theme.palette.text.secondary} fontWeight={700} textAlign='center' >Tracks</Typography>
                    <TrackBox>
                        <Typography variant="h4" component={'h4'} fontWeight={700} textAlign={'center'}>IOT</Typography>
                        <Typography variant="h6" component={'h4'} fontWeight={400} textAlign={'center'}>IoT is one of the emerging technology  in today's world and its scope is increasing day be day. Out of box thinking in this domain is valued.</Typography>
                    </TrackBox>
                    <TrackBox>
                        <Typography variant="h4" component={'h4'} fontWeight={700} textAlign={'center'}>BLOCKCHAIN</Typography>
                        <Typography variant="h6" component={'h4'} fontWeight={400} textAlign={'center'}>Cryptocurrency and NFTs are the current trends. New ideas that make better use of the existing blockchain tech would be appreciated.</Typography>
                    </TrackBox>
                    <TrackBox>
                        <Typography variant="h4" component={'h4'} fontWeight={700} textAlign={'center'}>AGRICULTURE</Typography>
                        <Typography variant="h6" component={'h4'} fontWeight={400} textAlign={'center'}>With the majority of India's economy depending on Agriculture, innovation in this field is always welcome.</Typography>
                    </TrackBox>
                    <TrackBox>
                        <Typography variant="h4" component={'h4'} fontWeight={700} textAlign={'center'}>HEALTHCARE</Typography>
                        <Typography variant="h6" component={'h4'} fontWeight={400} textAlign={'center'}>Ever growing field that's always open to new technology. An innovation that helps people's life directly.</Typography>
                    </TrackBox>
                    <TrackBox>
                        <Typography variant="h4" component={'h4'} fontWeight={700} textAlign={'center'}>OPEN INNOVATION</Typography>
                        <Typography variant="h6" component={'h4'} fontWeight={400} textAlign={'center'}>This is for all the creative thinkers who do not fall under a specific category. Give life to any of your ideas and stand a chance to win.</Typography>
                    </TrackBox>
                </StyledBox>
            </Box>
        </Fragment>
    )
}