import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Results from "../Pages/Results"
import Announcements from "../Pages/Announcements"
import Presentation from "../Pages/Presentation"


function AppRoutes(){
    return (
        <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/results" element={<Results/>} />
                <Route exact path="/announcements" element={<Announcements/>} />
                <Route exact path="/presentation" element={<Presentation/>} />
            </Routes>
        </Router>
        </>
    )
}

export default AppRoutes;