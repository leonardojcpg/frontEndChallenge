import "../HomeBoxRoutes/style.css";
import iconResults from "./assets/iconResults.svg";
import iconAnnouncements from "./assets/iconAnnouncements.svg";
import iconPresentation from "./assets/iconPresentation.svg";
import iconYduqs from "./assets/iconYduqs.svg";
import iconContact from "./assets/contact.svg";
import iconEmail from "./assets/iconEmail.svg";

export const HomeBoxRoutes = () => {
  return (
    <div className="container">
      <div className="boxes">
        <ul>
          <li>
            <a href="/Results">
              <img src={iconResults} alt="" />
            </a>
          </li>

          <li>
            <a href="/Announcements">
              <img src={iconAnnouncements} alt="" />
            </a>
          </li>

          <li>
            <a href="/Presentation">
              <img src={iconPresentation} alt="" />
            </a>
          </li>

          <li>
            <a href="/">
              <img src={iconYduqs} alt="" />
            </a>
          </li>

          <li>
            <a href="/">
              <img src={iconContact} alt="" />
            </a>
          </li>

          <li>
            <a href="/">
              <img src={iconEmail} alt="" />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};
