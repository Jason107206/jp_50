import { Typography } from "@mui/material";
import CenterBox from "../core/CenterBox";
import GridLayout from "../core/GridLayout";
import RoundedLinearProgress from "../core/RoundedLinearProgress";

const CharacterDisplay = ({ character, progress }) => (
    <GridLayout
        sx={{
            gridTemplateRows: '1fr auto',
            padding: '2rem'
        }}
    >
        <CenterBox>
            <Typography variant="h2">{character}</Typography>
        </CenterBox>
        <RoundedLinearProgress
            variant='determinate'
            value={progress}
        />
    </GridLayout>
);

export default CharacterDisplay;