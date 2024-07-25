import { Box, styled } from "@mui/material"

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    height: '100%',
    width: '100%',
    padding: '2rem',
    gap: '2rem',
    flexWrap: 'wrap'
}));

export default FlexBox;