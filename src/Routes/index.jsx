import {Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Results from "../Pages/Results"
import Announcements from "../Pages/Announcements"
import Presentation from "../Pages/Presentation"

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
