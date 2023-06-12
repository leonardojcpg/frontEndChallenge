import "./styles.scss"
import institutional from "./assets/institucional.svg"
import texture from "./assets/texture.svg"

export const HomeInstitutional = () => {
    return (
        <div className="container">
            <div className="cards">
                <img src={institutional} alt="" />
            </div>
            <div className="texture">
                <img src={texture} alt="" />
            </div>
        </div>
    )
}