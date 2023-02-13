import { Box, Divider, styled, Typography, useTheme } from "@mui/material";
import { Fragment } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';

const FlexBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    color: theme.palette.text.black,
    padding: '0.25rem'
}))


export default function TimeLine() {
    const theme = useTheme()
    return (
        <Fragment>
            <FlexBox justifyContent={'center'} width={'100vw'} alignItems='center'>
                <FlexBox sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    justifyContent: 'center',
                    padding: { xs: '1rem', sm: '2rem', md: '3rem' },
                    margin: '1rem',
                    borderRadius: 5
                }}>
                    <FlexBox bgcolor={'rgba(255,255,255,0.7)'} sx={{
                        width: { xs: '16rem', sm: '23rem', md: '30rem' },
                        borderRadius: 3,
                        flexDirection: 'column',
                        padding: 1,
                        margin: '1rem'
                    }}>
                        <FlexBox alignItems={'center'} width={'100%'}>
                            <CalendarMonthIcon fontSize="medium" />
                            <Typography marginLeft={'1rem'} variant="h5" component={'h3'} fontWeight={700}>TIMELINE</Typography>
                        </FlexBox>
                        <FlexBox justifyContent={'space-between'} alignItems='center'>
                            <Box>
                                <Typography variant="body1" component={'p'} fontWeight={700}>PHASE 1 SUBMISSION OF PROBLEM STATEMENT</Typography>
                                <Typography variant="body2" component={'p'}>LAST DATE: DECEMBER 15</Typography>
                            </Box>
                            <Box>
                                <ToggleOnRoundedIcon fontSize="large" color="error" />
                            </Box>
                        </FlexBox>
                        <Divider sx={{
                            border: `0.5px solid ${theme.palette.text.black}`
                        }} />

                        <FlexBox justifyContent={'space-between'} alignItems='center'>
                            <Box>
                                <Typography variant="body1" component={'p'} fontWeight={700}>PHASE 1 SCREENING</Typography>
                                <Typography variant="body2" component={'p'}>LAST DATE: DECEMBER 16</Typography>
                            </Box>
                            <Box>
                                <ToggleOnRoundedIcon fontSize="large" color="error" />
                            </Box>
                        </FlexBox>
                        <Divider sx={{
                            border: `0.5px solid ${theme.palette.text.black}`
                        }} />

                        <FlexBox justifyContent={'space-between'} alignItems='center'>
                            <Box>
                                <Typography variant="body1" component={'p'} fontWeight={700}>PHASE 1 DECLARATION OF SHORTLISTED CANDIDATE</Typography>
                                <Typography variant="body2" component={'p'}>LAST DATE: DECEMBER 20</Typography>
                            </Box>
                            <Box>
                                <ToggleOnRoundedIcon fontSize="large" color="error" />
                            </Box>
                        </FlexBox>
                        <Divider sx={{
                            border: `0.5px solid ${theme.palette.text.black}`
                        }} />

                        <FlexBox justifyContent={'space-between'} alignItems='center'>
                            <Box>
                                <Typography variant="body1" component={'p'} fontWeight={700}>PHASE 2 REGISTRATION</Typography>
                                <Typography variant="body2" component={'p'}>LAST DATE: DECEMBER 25</Typography>
                            </Box>
                            <Box>
                                <ToggleOnRoundedIcon fontSize="large" color="error" />
                            </Box>
                        </FlexBox>
                        <Divider sx={{
                            border: `0.5px solid ${theme.palette.text.black}`
                        }} />

                        <FlexBox justifyContent={'space-between'} alignItems='center'>
                            <Box>
                                <Typography variant="body1" component={'p'} fontWeight={700}>HACKATHON'23</Typography>
                                <Typography variant="body2" component={'p'}>DATE: DECEMBER 15</Typography>
                            </Box>
                            <Box>
                                <ToggleOnRoundedIcon fontSize="large" color="error" />
                            </Box>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </Fragment>
    )
}