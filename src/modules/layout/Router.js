import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./MainScreen";
import MatchingScreen from "./MatchingScreen";
import DatabaseTool from "./DatabaseToolScreen.js";

const Router = () => 
    <BrowserRouter basename={process.env.NODE_ENV ? process.env.PUBLIC_URL : "/"}>
        <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/matching/" element={<MatchingScreen />} />
            <Route path="/database/" element={<DatabaseTool />} />
        </Routes>
    </BrowserRouter>

export default Router;