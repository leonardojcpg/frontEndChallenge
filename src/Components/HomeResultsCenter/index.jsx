import "./styles.scss";
import arrows from "./assets/arrows.svg";
import iconUpOne from "./assets/iconUpOne.svg";
import iconUpTwo from "./assets/iconUpTwo.svg";
import iconUpThree from "./assets/iconUpThree.svg";
import iconDownOne from "./assets/iconDownOne.svg";
import iconDownTwo from "./assets/iconDownTwo.svg";
import emailIcons from "./assets/emailIcons.svg";

export const HomeResultsCenter = () => {
  const boxIconsUp = [
    {
      id: 1,
      image: iconUpOne,
    },
    {
      id: 2,
      image: iconUpTwo,
    },
    {
      id: 3,
      image: iconUpThree,
    },
  ];

  const boxIconsDown = [
    {
      id: 3,
      image: iconDownOne,
    },
    {
      id: 4,
      image: iconDownTwo,
    },
  ];

  return (
    <div className="resultsContainer">
      <div className="resultsCentral">
        <div className="titleResults">
          <h2>Central de Resultados</h2>
        </div>
        <div className="arrow">
          <img src={arrows} alt="" />
        </div>
        <div className="icons">
          <div className="iconsUp">
            <ul>
              {boxIconsUp.map((box) => (
                <li key={box.id} className="up">
                  <img src={box.image} alt={`Icon ${box.id}`} />
                </li>
              ))}
            </ul>
          </div>
          <div className="iconsDown">
            <ul>
              {boxIconsDown.map((icon) => (
                <li key={icon.id} className="down">
                  <img src={icon.image} alt={`Icon ${icon.id}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="link1">
          <a href="/">Ver todos os resultados</a>
        </div>
      </div>
      <div className="eventsCalendar">
        <div className="titleCalendar">
          <h2>Calendário de Eventos</h2>
        </div>
        <div className="listCalendar">
          <ul>
            <li>
              <h4>ABR | 23</h4>
              <span>
                Amet minim molit non deserunt ullamco est sil aliqua dolor do
                amet sint
              </span>
              <p>00.00 - 23:59 (Horario de Brasília)</p>
            </li>
            <li>
              <h4>ABR | 23</h4>
              <span>
                Amet minim molit non deserunt ullamco est sil aliqua dolor do
                amet sint
              </span>
              <p>00.00 - 23:59 (Horario de Brasília)</p>
            </li>
            <li>
              <h4>ABR | 23</h4>
              <span>
                Amet minim molit non deserunt ullamco est sil aliqua dolor do
                amet sint
              </span>
              <p>00.00 - 23:59 (Horario de Brasília)</p>
            </li>
            <img src={emailIcons} alt="" />
            <img id="emailIcons2" src={emailIcons} alt="" />
            <img id="emailIcons3" src={emailIcons} alt="" />

          </ul>
        </div>
        <div className="link2">
          <a href="/">Ver todos os resultados</a>
        </div>
      </div>
    </div>
  );
};
