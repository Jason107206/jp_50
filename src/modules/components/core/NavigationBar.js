import { ArrowBack } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavigationBar = ({ title = '', canReturn = false, onReturn = null }) => {
    const navigate = useNavigate();
    if (onReturn === null) onReturn = () => navigate('/');

    const ReturnButton = () => (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 2 }}
            onClick={onReturn}
            onContextMenu={e => e.preventDefault()}
        >
            <ArrowBack />
        </IconButton>
    )

    const TitleBar = () => (
        <Typography
            variant="h6"
            component={"div"}
            sx={{ ml: 1.5, flexGrow: 1 }}
        >
            {title}
        </Typography>
    )

    return (
        <AppBar position='sticky'>
            <Toolbar>
                {canReturn && <ReturnButton />}
                <TitleBar />
            </Toolbar>
        </AppBar >
    )
}

export default NavigationBar;