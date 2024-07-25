import { Card, CardContent, Typography } from "@mui/material";
import CenterBox from "../core/CenterBox";

const CharacterItemCard = ({ primary, secondary }) =>
    <Card>
        <CardContent>
            <CenterBox sx={{ gap: '2rem' }}>
                <Typography
                    variant="h4"
                >
                    {primary}
                </Typography>
                <Typography
                    variant="h5"
                    color="text.secondary"
                >
                    {secondary}
                </Typography>
            </CenterBox>
        </CardContent>
    </Card>

export default CharacterItemCard;