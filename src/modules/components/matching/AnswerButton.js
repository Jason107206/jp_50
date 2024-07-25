import { Button, Typography } from "@mui/material";

const AnswerButton = ({ variant, color, disabled, character, onClick }) => (
    <Button
        variant={variant}
        color={color}
        disabled={disabled}
        onClick={onClick}
        onContextMenu={e => e.preventDefault()}
    >
        <Typography variant="h4">{character}</Typography>
    </Button>
)

export default AnswerButton;