import { styled, LinearProgress, linearProgressClasses } from "@mui/material";

const RoundedLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5
    }
}));

export default RoundedLinearProgress;