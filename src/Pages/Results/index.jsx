import "./styles.scss";
import weAre from "./assets/WeAre.svg";
import texture1 from "./assets/texture1.svg";
import texture2 from "./assets/texture2.svg";
import bg from "./assets/bg.svg";
import { Table } from "../../Components/ResultsTable";
import toolIcon from "./assets/toolIcon.svg";
import compIcon from "./assets/compIcon.svg"
import imprimir from "./assets/imprimir.svg"
import pdf from "./assets/pdf.svg"
import { ResultsFooter } from "./ResultsFooter";


const Results = () => {
  return (
    <>
      <div className="results-content">
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

      <div className="results-clickHere">
        <p>
          <a href="/results">Clique aqui </a>para ouvir o último Call de
          Resultados
        </p>
        <img src={toolIcon} alt="" />
      </div>

      <div className="results-share">
        <p>Compartilhar: </p>
        <div className="results-icons">
          <img src={compIcon} alt="" />
          <img src={imprimir} alt="" />
          <img src={pdf} alt="" />
        </div>
      </div>
      <ResultsFooter/>
    </>
  );
};

export default Results;
