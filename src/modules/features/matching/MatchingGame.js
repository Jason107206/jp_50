import { useLayoutEffect, useState } from "react";
import GridLayout from "../../components/core/GridLayout";
import CharacterDisplay from "../../components/matching/CharacterDisplay";
import useWordsetStore from "../../store";
import { MATCHING_OPTIONS, MATCHING_THRESOLD_SCORE } from "../../constants";
import AnswerSelector from "../../components/matching/AnswerSelector";
import prepareAnswer from "./helper/prepareAnswer";

const MatchingGame = ({ onEnded }) => {
    const currentWordset = useWordsetStore(state => state.currentWordset);
    const characterList = currentWordset.characters;
    const [characterIndex, setCharacterIndex] = useState(0);

    const initializeOptions = () => {
        let defaultOptions = new Array(MATCHING_OPTIONS);
        for (let index = 0; index < MATCHING_OPTIONS; index++) {
            defaultOptions[index] = {
                isAnswer: true,
                character: characterList[characterIndex].hiragana
            }
        }
        return defaultOptions;
    }

    const [score, setScore] = useState(0);
    const [progress, setProgress] = useState(0);
    const [options, setOptions] = useState(initializeOptions());

    const [isAnswered, setAnswered] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setAnswered(true);
            setScore(score + 1);
        }
    }

    useLayoutEffect(() => {
        if (score <= MATCHING_THRESOLD_SCORE) {
            setProgress(score / MATCHING_THRESOLD_SCORE * 100);
            setTimeout(() => {
                setAnswered(false);
                score > 0 && setOptions(prepareAnswer(characterList, characterList[characterIndex], score));
            }, 1000);
        } else {
            setTimeout(() => {
                if (characterIndex < characterList.length - 1) {
                    setAnswered(false);
                    setCharacterIndex(characterIndex + 1);
                } else {
                    onEnded();
                }
            }, 1000);
        }
    }, [score]);

    useLayoutEffect(() => {
        setOptions(initializeOptions());
        setScore(0);
        setProgress(0);
    }, [characterIndex])

    return (
        <GridLayout
            sx={{
                gridTemplateRows: '2fr 3fr'
            }}
        >
            <CharacterDisplay
                character={characterList[characterIndex].sound}
                progress={progress}
            />
            <AnswerSelector
                options={options}
                isAnswered={isAnswered}
                onAnswered={handleAnswer}
            />
        </GridLayout>
    )
}

export default MatchingGame;