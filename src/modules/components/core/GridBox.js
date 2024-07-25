import { Box, styled } from "@mui/material"

const GridBox = styled(Box)(() => ({
    display: 'grid',
    height: '100%',
    width: '100%',
    padding: '2rem',
    gap: '2rem'
}));

export default GridBox;