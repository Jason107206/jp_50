import { useState } from "react";
import GridLayout from "../components/core/GridLayout";
import NavigationBar from "../components/core/NavigationBar";
import WordsetOverview from "../features/wordset/WordsetOverview";
import MatchingGame from "../features/matching/MatchingGame";

const MatchingScreen = () => {
    const [hasStarted, setStarted] = useState(false);

    const handleStart = () => {
        setStarted(true);
    }

    const handleEnd = () => {
        setStarted(false);
    }

    return (
        <GridLayout sx={{ gridTemplateRows: 'auto 1fr' }}>
            <NavigationBar title="Matching" canReturn />
            {
                hasStarted ?
                    <MatchingGame onEnded={handleEnd} />
                    :
                    <WordsetOverview onStart={handleStart} />
            }
        </GridLayout>
    )
}

export default MatchingScreen;