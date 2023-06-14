import "./styles.scss";
import arrows from "./assets/setas.svg";
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

        <div className="arrows">
          <img src={arrows} alt="" />
        </div>

        <div className="icons">
          <div className="iconsUp">
            <ul>
              {boxIconsUp.map((box) => (
                <li key={box.id} className="up">
                  <img src={box.image} alt={`Icon ${box.id}`} width={100} height={100}/>
                </li>
              ))}
            </ul>
          </div>

          <div className="iconsDown">
            <ul>
              {boxIconsDown.map((icon) => (
                <li key={icon.id} className="down">
                  <img src={icon.image} alt={`Icon ${icon.id}`} width={64} height={64} />
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
            <div className="emailIcons">
            <div className="emailIcon1">
              <img src={emailIcons} alt="" />
            </div>
            <div className="emailIcon2">
              <img src={emailIcons} alt="" />
            </div>
            <div className="emailIcon3">
              <img src={emailIcons} alt="" />
            </div>
            </div>

          </ul>
        </div>
        <div className="link2">
          <a href="/">Ver todos os resultados</a>
        </div>
      </div>
    </div>
  );
};
