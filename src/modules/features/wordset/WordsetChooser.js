import { useNavigate } from "react-router-dom";
import GridBox from "../../components/core/GridBox";
import WordsetCard from "../../components/wordset/WordsetCard";
import wordsetDatabase from "../../database";
import useWordsetStore from "../../store";
import { Typography } from "@mui/material";

const WordsetChooser = () => {
    const navigate = useNavigate();
    const changeWordset = useWordsetStore(state => state.changeWordset);

    return (
        <GridBox>
            {
                wordsetDatabase.map((wordset, index) =>
                    <WordsetCard
                        key={index}
                        avatar={wordset.characters[0].hiragana}
                        primary={
                            <Typography variant="h6">{wordset.name}</Typography>
                        }
                        items={wordset.characters.map(characters => characters.hiragana)}
                        onStartMatching={() => {
                            changeWordset({
                                name: wordset.name,
                                characters: wordset.characters
                            });
                            navigate('/matching/');
                        }}
                    />
                )
            }
        </GridBox>
    )
}

export default WordsetChooser;