import "./styles.scss"
import { Footer } from "../../Components/Footer";
import weAre from "./assets/WeAre.svg"
import texture1 from "./assets/texture1.svg"
import texture2 from "./assets/texture2.svg"
import bg from "./assets/bg.svg"
import content from "./assets/content.svg"
import share from "./assets/compartilhar.svg"


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
        <div className="body">
          <img src={content} alt="" />
        </div>
        <div className="infoShare">
          <img src={share} alt="" />
        </div>
        <Footer/>
    </div>
  )
};

export default Results;
