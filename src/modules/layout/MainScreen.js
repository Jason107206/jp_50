import { Box } from "@mui/material";
import GridLayout from "../components/core/GridLayout";
import NavigationBar from "../components/core/NavigationBar";
import VersionIndicator from "../components/core/VersionIndicatior";
import { APP_NAME } from "../constants";
import WordsetChooser from "../features/wordset/WordsetChooser";

const MainScreen = () => (
    <Box
        sx={{
            bgcolor: 'text.disabled',
            gridTemplateRows: 'auto 1fr auto'
        }}
    >
        <NavigationBar title={APP_NAME} />
        <WordsetChooser />
        <VersionIndicator />
    </Box>
)

export default MainScreen;