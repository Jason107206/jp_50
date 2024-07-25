import GridBox from "../core/GridBox";
import AnswerButton from "./AnswerButton";

const AnswerSelector = ({ options, isAnswered, onAnswered }) => (
    <GridBox
        sx={{
            paddingTop: '0',
            gap: '1rem'
        }}
    >
        {
            options.map((option, index) => (
                option.isAnswer ?
                    <AnswerButton
                        key={index}
                        character={option.character}
                        variant={isAnswered ? "contained" : "outlined"}
                        color={isAnswered ? "success" : "primary"}
                        disabled={isAnswered && false}
                        onClick={() => !isAnswered && onAnswered(true)}
                    />
                    :
                    <AnswerButton
                        key={index}
                        character={option.character}
                        variant="outlined"
                        disabled={isAnswered ? true : false}
                        onClick={() => !isAnswered && onAnswered(false)}
                    />
            ))
        }
    </GridBox>
)

export default AnswerSelector;