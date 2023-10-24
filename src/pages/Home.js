import { Box, Button, Container, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import CountdownTimer from "../components/widgets/CountdownTimer";
import VectorImg1 from '../assets/Group-1.png'
import VectorImg2 from '../assets/vector-1.png'
import VectorImg3 from '../assets/Group-2.png'
import VectorImg4 from '../assets/vector-6.png'
// import VectorImg5 from '../assets/vector-10.png'
import VectorImg6 from '../assets/vector-5.png'
import VectorImg7 from '../assets/vector-8.png'
import VectorImg8 from '../assets/vector-4.png'
import StyledBox from "../components/widgets/StyledBox";

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.black,
    "&:hover": {
        backgroundColor: theme.palette.action.hover
    }
}))
const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.black,
}))

const ImageBox = styled(Box)({
    borderRadius: '50%',
    overflow: 'hidden',
    width: '200px',
    height: '200px'
})

const VectorImgBox = styled(Box)({
    zIndex: -10,
    position: 'absolute'
})

export default function Home() {
    const theme = useTheme()
    const NonMobileScreenSize = useMediaQuery('(min-width: 900px)')

    const deadlineDate = new Date("2023-11-25").getTime()

    return (
        <Container maxWidth={'xl'} sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box sx={{
                maxWidth: '1200px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <StyledBox width={'100vw'} flexDirection={'column'} position={'relative'}>
                    {NonMobileScreenSize && <VectorImgBox width={{ md: '6rem', lg: '8rem' }} left={0} bottom={50}>
                        <img src={VectorImg1} alt="Vector-1" width={'100%'} />
                    </VectorImgBox>}
                    {NonMobileScreenSize && <VectorImgBox width={{ md: '13rem', lg: '14rem' }} right={0} >
                        <img src={VectorImg2} alt="Vector-2" width={'100%'} />
                    </VectorImgBox>}
                    <Typography variant="h3" component={'h1'} color={theme.palette.text.main} fontWeight={700}>C2C Hack</Typography>
                    <CountdownTimer targetDate={deadlineDate} />
                    <CustomButton sx={{
                        fontWeight: 700,
                        padding: { xs: '10px 50px', md: '10px 150px' },
                        borderRadius: 10,
                        fontSize: theme.typography.fontSize * 2,
                        margin: '1rem'
                    }}>Register Now!!!</CustomButton>
                </StyledBox>
                <StyledBox gap={5} sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    padding: '1rem'
                }}>
                    <img width={'300px'} height={'auto'} src="https://www.shutterstock.com/image-vector/people-working-together-hackathon-vector-600w-1660425910.jpg" alt="hackathon" />
                    <Typography variant="h5" component={'p'} textAlign={'center'}>
                        HACKATHON”22, is a 24-hour virtual hackathon and is an intra and inter-college event. It has two phases namely Ideation phase and 24-hour hackathon phase. The first edition Hack & Tackle 1.0 started in the year 2019 with a participation of nearly 150 students from various institutes.
                    </Typography>
                </StyledBox>
                <StyledBox paddingTop={NonMobileScreenSize ? '5rem' : ''}>
                    {NonMobileScreenSize && <VectorImgBox width={{ md: '15rem', lg: '17rem' }} right={0}>
                        <img src={VectorImg3} alt='Vector-3' width={'100%'} />
                    </VectorImgBox>}
                    <CustomBox sx={{
                        fontWeight: 700,
                        padding: { xs: '10px 40px', sm: '10px 150px' },
                        borderRadius: 10,
                        margin: { xs: '1rem' },
                        fontSize: theme.typography.fontSize * 1.8,
                    }} >5 , 6 & 7 th JANUARY</CustomBox>
                </StyledBox>
                <StyledBox paddingTop={NonMobileScreenSize ? '2.5rem' : ''}>
                    <Box>
                        <Typography variant="h2" component={'p'} color={theme.palette.text.secondary} sx={{
                            fontSize: { xs: '4rem', sm: '6rem', md: '8rem' }
                        }}>PRIZES</Typography>
                        <Typography variant="h4" component={'p'} color={theme.palette.text.secondary} sx={{
                            margin: { xs: '-20px 3px', sm: '-25px 5px' },
                            fontSize: { xs: '3rem', sm: '4rem', md: '6rem' }
                        }}>WORTH</Typography>
                    </Box>
                    <Typography variant="h1" component={'p'} color={theme.palette.text.secondary} sx={{
                        fontSize: { xs: '5.5rem', sm: '9rem', md: '14rem' }
                    }}>50K</Typography>
                </StyledBox>

                <StyledBox position={'relative'} width={'100vw'} margin='2rem 0rem' flexDirection={'column'}>
                    {NonMobileScreenSize && <VectorImgBox width={{ md: '13rem', lg: '15rem', xl: '17rem' }} left={0}>
                        <img src={VectorImg4} alt='Vector-4' width={'100%'} />
                    </VectorImgBox>}
                    {/* {NonMobileScreenSize && <StyledBox justifyContent={'center'} >
                        <img src={VectorImg5} alt='Vector-5' style={{ position: 'absolute', width: '13rem', zIndex: -10 }} />
                    </StyledBox>} */}
                    <CustomBox sx={{
                        margin: '1rem auto',
                        fontWeight: 700,
                        padding: { xs: '10px 100px', sm: '10px 225px' },
                        borderRadius: 5,
                        fontSize: theme.typography.fontSize * 1.8
                    }} >VENUE</CustomBox>
                    <Box margin={'1rem auto'} sx={{
                        width: { xs: '90vw', sm: '70vw', md: '60vw', lg: '50vw' },
                        bgcolor: 'rgba(255,255,255,0.8)',
                        color: theme.palette.text.black,
                        padding: '1rem',
                        textAlign: 'center',
                        borderRadius: '1rem'
                    }}>
                        <Typography variant="h5" component={'p'}>Some Text, Some text, Some text, venue, venue, venue</Typography>
                    </Box>
                </StyledBox>
                <Typography variant="h2" component={'h2'} fontWeight={700} color={theme.palette.text.secondary} sx={{
                    margin: '1rem'
                }}>ABOUT C2C</Typography>
                <Box p={'1rem'}>
                    <Typography variant="h6" component={'p'} fontWeight={400} color={theme.palette.text.secondary} textAlign='center' >Compete to Compute is a body of computer professionals in India. It was started on 6 March 1965 by a few computer professionals and has now grown to be the national body representing computer professionals. It has 72 chapters across India, 511 student branches, and 100,000 members.</Typography>
                </Box>


                <StyledBox flexDirection={'column'} width={'100vw'} position='relative' paddingTop={NonMobileScreenSize ? '2rem' : ''}>
                    {NonMobileScreenSize && <VectorImgBox width={{ md: '8rem', lg: '9rem' }} left={0}>
                        <img src={VectorImg6} alt='Vector-6' width='100%' />
                    </VectorImgBox>}
                    {NonMobileScreenSize && <VectorImgBox width={{ md: '18rem', lg: '20rem' }} right={0} bottom='55%'>
                        <img src={VectorImg7} alt='Vector-7' width={'100%'} />
                    </VectorImgBox>}
                    {NonMobileScreenSize && <VectorImgBox width={{ md: '13rem', lg: '15rem' }} left={0} bottom='0%'>
                        <img src={VectorImg8} alt='Vector-8' width={'100%'} />
                    </VectorImgBox>}
                    <Typography variant="h4" component={'h2'} fontWeight={700} color={theme.palette.text.secondary} sx={{
                        margin: '2rem'
                    }}>THE TEAM</Typography>
                    <StyledBox sx={{
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-evenly',
                        width: '100%'
                    }}>
                        <Box textAlign={'center'} margin={2}>
                            <ImageBox>
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200" alt='person' />
                            </ImageBox>
                            <Typography variant="h6" component={'p'} fontWeight={700} color={theme.palette.text.secondary} marginTop={1}>PRESIDENT</Typography>
                        </Box>
                    </StyledBox>
                    <StyledBox sx={{
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-evenly',
                        width: '100%'
                    }}>
                        <Box textAlign={'center'} margin={2}>
                            <ImageBox>
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200" alt='person' />
                            </ImageBox>
                            <Typography variant="h6" component={'p'} fontWeight={700} color={theme.palette.text.secondary} marginTop={1}>PRESIDENT</Typography>
                        </Box>
                        <Box textAlign={'center'} margin={2}>
                            <ImageBox>
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200" alt='person' />
                            </ImageBox>
                            <Typography variant="h6" component={'p'} fontWeight={700} color={theme.palette.text.secondary} marginTop={1}>PRESIDENT</Typography>
                        </Box>
                    </StyledBox>
                    <StyledBox sx={{
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-evenly',
                        width: '100%'
                    }}>
                        <Box textAlign={'center'} margin={2}>
                            <ImageBox>
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200" alt='person' />
                            </ImageBox>
                            <Typography variant="h6" component={'p'} fontWeight={700} color={theme.palette.text.secondary} marginTop={1}>PRESIDENT</Typography>
                        </Box>
                        <Box textAlign={'center'} margin={2}>
                            <ImageBox>
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200" alt='person' />
                            </ImageBox>
                            <Typography variant="h6" component={'p'} fontWeight={700} color={theme.palette.text.secondary} marginTop={1}>PRESIDENT</Typography>
                        </Box>
                    </StyledBox>
                </StyledBox>
            </Box>
        </Container>
    )
}
