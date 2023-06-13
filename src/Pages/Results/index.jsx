import "./styles.scss";
import { Footer } from "../../Components/Footer";
import weAre from "./assets/WeAre.svg";
import texture1 from "./assets/texture1.svg";
import texture2 from "./assets/texture2.svg";
import bg from "./assets/bg.svg";
import { Table } from "../../Components/ResultsTable";
import toolIcon from "./assets/toolIcon.svg";
import compIcon from "./assets/compIcon.svg"
import imprimir from "./assets/imprimir.svg"
import pdf from "./assets/pdf.svg"


const Results = () => {
  return (
    <div className="page">
      <div className="content">
        <img id="texture1" src={texture1} alt="" />
        <img id="texture2" src={texture2} alt="" />
        <img id="bg" src={bg} alt="" />
        <img id="weAre" src={weAre} alt="" />
        <h2>Central de Resultados</h2>
      </div>

      <div className="filterInput">
        <label htmlFor="">Filtrar por: </label>
        <input type="select" placeholder="" />
      </div>

      <Table />

      <div className="clickHere">
        <p>
          <a href="/results">Clique aqui </a>para ouvir o último Call de
          Resultados
        </p>
        <img src={toolIcon} alt="" />
      </div>

      <div className="share">
        <p>Compartilhar: </p>
        <div className="icons">
          <img src={compIcon} alt="" />
          <img src={imprimir} alt="" />
          <img src={pdf} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
