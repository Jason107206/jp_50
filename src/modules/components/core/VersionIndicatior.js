import { Typography } from "@mui/material";
import CenterBox from "./CenterBox";
import { APP_VERSION } from "../../constants";

const VersionIndicator = () =>
    <CenterBox>
        <Typography variant="body2" color="CaptionText">Version: {APP_VERSION}</Typography>
    </CenterBox>

export default VersionIndicator;