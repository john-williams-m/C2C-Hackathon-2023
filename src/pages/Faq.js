import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Typography, useTheme } from "@mui/material";
import { Fragment } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq() {
    const theme = useTheme()
    return (
        <Fragment>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    background: 'radial-gradient(38.55% 38.55% at 98.83% 0%, rgba(0, 174, 224, 0.25) 0%, rgba(0, 174, 224, 0) 100%), radial-gradient(250.21% 22.47% at 0% 100%, rgba(232, 252, 7, 0.25) 0%, rgba(232, 252, 7, 0) 100%), #313131',
                    margin: '2rem',
                    padding: { xs: '1.5rem', sm: '2rem' },
                    width: { xs: '90vw', sm: '80vw', md: '70vw', lg: '60vw' },
                    borderRadius: { xs: 3, sm: 5 }
                }}>
                    <Typography variant="h3" component={'h3'} fontWeight={700} color={theme.palette.text.secondary}>FAQ'S</Typography>
                    <Divider sx={{
                        border: `2px solid ${theme.palette.text.secondary}`,
                        borderRadius: '5px',
                        margin: '1rem 0px'
                    }} />
                    <Accordion sx={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        margin: '1rem 0px',
                        borderRadius: '5px'
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography component={'p'}>Question 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component={'p'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        margin: '1rem 0px',
                        borderRadius: '5px'
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography component={'p'}>Question 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component={'p'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        margin: '1rem 0px',
                        borderRadius: '5px'
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography component={'p'}>Question 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component={'p'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </Fragment>
    )
}