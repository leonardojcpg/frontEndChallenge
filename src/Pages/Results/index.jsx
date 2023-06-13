import "./styles.scss"
import { Footer } from "../../Components/Footer";
import weAre from "./assets/WeAre.svg"
import texture1 from "./assets/texture1.svg"
import texture2 from "./assets/texture2.svg"
import bg from "./assets/bg.svg"



const Results = () => {
  return (
    <div>
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

        <Footer/>
    </div>
  )
};

export default Results;
