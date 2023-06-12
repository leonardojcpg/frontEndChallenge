import "./styles.scss"
import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import texture1 from "../Results/assets/texture1.svg"
import texture2 from "../Results/assets/texture2.svg"
import bg from "../Results/assets/bg.svg"

const Annoucements = () => {
    return (
        <>
        <Header/>
        <div className="top">
            <img id="texture1" src={texture1} alt="" />
            <img id="texture2" src={texture2} alt="" />
            <img id="bg" src={bg} alt="" />
        </div>
        <Footer/>
        </>
    )
}

export default Annoucements;