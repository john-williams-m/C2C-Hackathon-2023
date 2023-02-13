import { Box, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment } from "react";
import StyledBox from "./StyledBox";

const CounterBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.text.primary,
    borderRadius: 8,
    fontSize: '3rem',
    padding: '13px 15px',
}))

const StyledCounterBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    margin: 10
})

export default function Counter(props) {
    const theme = useTheme()
    const NonMobileScreenSize = useMediaQuery('(min-width: 600px)')
    let { days, hours, minutes, seconds } = props
    return (
        <Fragment>
            <Typography variant="h4" color={theme.palette.text.primary}>T-MINUS</Typography>
            <StyledBox>
                <StyledCounterBox>
                    <CounterBox sx={{
                        margin: { xs: '0rem', sm: '1rem' }
                    }}>
                        <Typography variant="h4" fontWeight={700}>{days}</Typography>
                    </CounterBox>
                    {NonMobileScreenSize && <Typography variant="h5" fontWeight={700}>DAYS</Typography>}
                </StyledCounterBox>
                <StyledCounterBox>
                    <CounterBox sx={{
                        margin: { xs: '0rem', sm: '1rem' }
                    }}>
                        <Typography variant="h4" fontWeight={700}>{hours}</Typography>
                    </CounterBox>
                    {NonMobileScreenSize && <Typography variant="h5" fontWeight={700}>HOURS</Typography>}
                </StyledCounterBox>
                <StyledCounterBox>
                    <CounterBox sx={{
                        margin: { xs: '0rem', sm: '1rem' }
                    }}>
                        <Typography variant="h4" fontWeight={700}>{minutes}</Typography>
                    </CounterBox>
                    {NonMobileScreenSize && <Typography variant="h5" fontWeight={700}>MINUTES</Typography>}
                </StyledCounterBox>
                <StyledCounterBox>
                    <CounterBox sx={{
                        margin: { xs: '0rem', sm: '1rem' }
                    }}>
                        <Typography variant="h4" fontWeight={700}>{seconds}</Typography>
                    </CounterBox>
                    {NonMobileScreenSize && <Typography variant="h5" fontWeight={700}>SECONDS</Typography>}
                </StyledCounterBox>
            </StyledBox>
        </Fragment>
    )
}