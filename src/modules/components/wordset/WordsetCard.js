import { Avatar, Button, Card, CardActions, CardHeader, CardMedia, Typography } from "@mui/material";
import CenterBox from "../core/CenterBox";
import { Rule } from "@mui/icons-material";

const WordsetCard = ({ avatar, primary, items, onStartMatching }) => (
    <Card>
        <CardHeader
            avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}>{avatar}</Avatar>}
            title={primary}
        />
        <CardMedia>
            <CenterBox
                sx={{
                    gap: '1rem',
                    paddingY: '1rem'
                }}
            >
                {
                    items.map((value, index) =>
                        <Typography key={index} variant="h4">{value}</Typography>
                    )
                }
            </CenterBox>
        </CardMedia>
        <CardActions>
            <Button
                startIcon={<Rule />}
                onClick={onStartMatching}
                onContextMenu={e => e.preventDefault()}
            >
                Matching
            </Button>
        </CardActions>
    </Card>
)

export default WordsetCard;