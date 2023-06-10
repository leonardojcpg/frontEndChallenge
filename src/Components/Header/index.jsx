import "./style.css"
import logo from "./assets/logo.svg"
import graphicIcon from "./assets/graphicIcon.svg"
import accesibilityIcon1 from "./assets/accessibilityIcon1.svg"
import accesibilityIcon2 from "./assets/accessibilityIcon2.svg"
import accesibilityIcon3 from "./assets/accessibilityIcon3.svg"
import contentIcons from "./assets/contentIcons.png"


export const Header = () => {
    return (
        <div className="container">
            <div className="container-content">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="content-price">
                    <div className="stats">
                        <h5>YDUQ3:<span> R$ 35,13</span></h5>
                        <h5>YDUQY:<span> R$ 35,13</span></h5>
                        <img src={graphicIcon} alt="graphicIcon" />
                    </div>
                </div>
                <div className="content-accessibility">
                    <h5>Acessibilidade: </h5>
                    <img id="img1" src={accesibilityIcon1} alt="" />
                    <img id="img2" src={accesibilityIcon2} alt="" />
                    <img id="img3" src={accesibilityIcon3} alt="" />
                </div>
                <div className="content-icons">
                    <img src={contentIcons} alt="" />
                </div>
            </div>
        </div>
    )
}