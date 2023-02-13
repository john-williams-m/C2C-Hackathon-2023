import { Typography } from '@mui/material';
import React from 'react';
import Counter from './Counter';
import { useCountdown } from '../shared/hooks/counter-hook';

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <Typography>Done</Typography>;
    } else {
        return (
            <Counter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer