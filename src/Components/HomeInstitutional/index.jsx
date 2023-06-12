import "./style.css"
import aboutUsCard from "./assets/abouUsCard.svg"

export const HomeInstitutional = () => {
    return (
        <div className="container">
            <div className="cards">
                <div className="aboutUsCard">
                    <img src={aboutUsCard} alt="" />
                </div>
            </div>
        </div>
    )
}