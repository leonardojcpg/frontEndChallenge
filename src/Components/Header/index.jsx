import "./style.css"
import logo from "../../assets/logo.svg"
import graphicIcon from "../../assets/graphicIcon.svg"

export const Header = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="content-price">
                <h5>YDUQ3:<span>R$ 35,13</span></h5>
                <h5>YDUQY:<span>R$ 35,13</span></h5>
                <img src={graphicIcon} alt="graphicIcon" />
            </div>
            <div className="content-accessibility">
                
            </div>
            <div className="content-icons">

            </div>
        </div>
    )
}