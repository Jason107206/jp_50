import { MATCHING_OPTIONS } from "../../../constants";
import shuffle from "../utils/shuffle";

const prepareAnswer = (
    wordset,
    answer,
    currentScore
) => {
    let answerInOptions = currentScore > 2 ? 1 : Math.floor(MATCHING_OPTIONS / 2);
    let answerCache = [];

    for (let index = 0; index <= answerInOptions - 1; index++) {
        answerCache[index] = {
            isAnswer: true,
            character: answer.hiragana
        }
    }

    while (answerCache.length < MATCHING_OPTIONS) {
        let drawnIndex = Math.floor(Math.random() * wordset.length);
        let drawnOption = wordset[drawnIndex].hiragana;

        if (!answerCache.some(e => e.character === drawnOption)) {
            answerCache.push({
                isAnswer: false,
                character: drawnOption
            });
        }
    }

    answerCache = shuffle(answerCache);
    return answerCache;
}

export default prepareAnswer;