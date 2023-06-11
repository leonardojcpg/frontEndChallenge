import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import iconResults from "./assets/iconResults.svg"
import iconAnnouncements from "./assets/iconAnnouncements.svg"
import iconPresentation from "./assets/iconPresentation.svg"

import Home from "../../Pages/Home"
import Results from "../../Pages/Results"
import Announcements from "../../Pages/Announcements"
import Presentation from "../../Pages/Presentation"


export const HomeBoxRoutes = () => {
    const icons = [
        {
            id: 1,
            name: "Results",
            route: "/results",
            image: iconResults,
        },
        {
            id: 2,
            name: "announcements",
            route: "/announcements",
            image: iconAnnouncements,
        },
        {
            id: 3,
            name: "presentation",
            route: "/presentation",
            image: iconPresentation,
        },
    ]
    return (
        <div className="container">
            
        </div>
    )
}