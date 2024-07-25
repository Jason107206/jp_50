import { Box, Button, Divider, Typography } from "@mui/material";
import GridBox from "../../components/core/GridBox";
import GridLayout from "../../components/core/GridLayout";
import CharacterItemCard from "../../components/wordset/CharacterCard";
import useWordsetStore from "../../store";
import { PlayArrow, Rule } from "@mui/icons-material";
import FlexBox from "../../components/core/FlexBox";

const WordsetOverview = ({ onStart }) => {
    const currentWordset = useWordsetStore(state => state.currentWordset);

    return (
        <GridLayout sx={{ gridTemplateRows: 'auto auto 1fr' }}>
            <GridBox>
                <Typography variant="h5">
                    {currentWordset.name}
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        minHeight: "3rem"
                    }}
                    startIcon={<Rule />}
                    onClick={onStart}
                >
                    Matching
                </Button>
            </GridBox>
            <Divider sx={{ marginX: '1rem' }} />
            <Box>
                <FlexBox
                    sx={{
                        height: 'auto'
                    }}
                >
                    {
                        currentWordset.characters.map((character, index) =>
                            <CharacterItemCard
                                key={index}
                                primary={character.hiragana}
                                secondary={character.sound}
                            />
                        )
                    }
                </FlexBox>
            </Box>
        </GridLayout>
    )
}

export default WordsetOverview;