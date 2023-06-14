import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import presentationBg from "./assets/presentationBg.svg"
import downloadIcon from "./assets/downloadIcon.svg"
import shareIcons from "../../Pages/Results/assets/compartilhar.svg"

const Presentation = () => {
    return (
        <>
        <Header/>
            <div className="presentation-top">
                <img id="presentation-topBg" src={presentationBg} alt="" />
            </div>

            <div className="bodyContainer">
                <div className="title"></div>
                <div className="input">
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div className="list">
                    <ul>
                        <li>
                            <span>18/06/2021 - </span>
                            <p>Apresentação - Aquisição da QConcursos</p>
                            <img src={downloadIcon} alt="" />
                        </li>
                        <li>
                            <span>07/04/2021 - </span>
                            <p>Apresentação - Bradesco BBI Investment Forum</p>
                            <img src={downloadIcon} alt="" />
                        </li>

                        <li>
                            <span>23/02/2021 - </span>
                            <p>Apresentação - Bradesco BBI Investment Premium</p>
                            <img src={downloadIcon} alt="" />
                        </li>

                        <li>
                            <span>12/01/2021 - </span>
                            <p>Apresentação - Bradesco BBI Group Meeting</p>
                            <img src={downloadIcon} alt="" />
                        </li>

                        <li>
                            <span>07/01/2021 - </span>
                            <p>Apresentação - Conferência Morgan Stanley</p>
                            <img src={downloadIcon} alt="" />
                        </li>
                    </ul>
                </div>
                <div className="pagesButton">

                </div>

                <div className="share">
                    <p>Compartilhar: </p>
                    <div className="icons">
                        <img src={shareIcons} alt="" />
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Presentation;