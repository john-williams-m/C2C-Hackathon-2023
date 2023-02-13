import { Box, Container, Grid, styled, Typography } from "@mui/material";
import StyledBox from "../components/widgets/StyledBox";
import Sponsor from '../assets/sponsor-1.png'
import MLHLogo from '../assets/mlh.png'

const SponsorImgBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center'
})

export default function Sponsors() {
    return (
        <Container maxWidth={'xl'} sx={{
            position: 'relative',
        }}>
            <StyledBox flexDirection={'column'} gap={4}>
                <Typography variant="h4" component={'h3'} fontWeight={700}>PRINCIPAL SPONSORS</Typography>
                <Typography variant="h4" component={'h3'} fontWeight={700}>VENUE SPONSORS</Typography>
                <Typography variant="h4" component={'h3'} fontWeight={700}>PREVIOUS SPONSORS</Typography>
                <Grid container spacing={4} justifyContent='center'>
                    <Grid item xs={8} sm={6} md={4} lg={3}>
                        <SponsorImgBox>
                            <img width={'140px'} src={Sponsor} alt='sponsor' />
                        </SponsorImgBox>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={3}>
                        <SponsorImgBox>
                            <img width={'140px'} src={MLHLogo} alt='sponsor' />
                        </SponsorImgBox>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={3}>
                        <SponsorImgBox>
                            <img width={'140px'} src={Sponsor} alt='sponsor' />
                        </SponsorImgBox>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} lg={3}>
                        <SponsorImgBox>
                            <img width={'140px'} src={MLHLogo} alt='sponsor' />
                        </SponsorImgBox>
                    </Grid>
                </Grid>
            </StyledBox>
        </Container>
    )
}