import "../HomeBoxRoutes/styles.scss";
import iconResults from "./assets/iconResults.svg";
import iconAnnouncements from "./assets/iconAnnouncements.svg";
import iconPresentation from "./assets/iconPresentation.svg";
import iconYduqs from "./assets/iconYduqs.svg";
import iconContact from "./assets/contact.svg";
import iconEmail from "./assets/iconEmail.svg";
import { Link } from "react-router-dom";

export const HomeBoxRoutes = () => {
  return (
    <div className="container">
      <div className="boxes">
        <ul>
          <li>
            <Link to="/results">
              <img src={iconResults} alt="" />
            </Link>
          </li>

          <li>
            <Link to="/announcements">
              <img src={iconAnnouncements} alt="" />
            </Link>
          </li>

          <li>
            <Link to="/presentation">
              <img src={iconPresentation} alt="" />
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={iconYduqs} alt="" />
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={iconContact} alt="" />
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={iconEmail} alt="" />
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};
