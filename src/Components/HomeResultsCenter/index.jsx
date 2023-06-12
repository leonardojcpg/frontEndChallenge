import "./styles.scss"
import investidors from "./assets/investidors.svg"

export const HomeResultsCenter = () => {
    return (
        <div className="resultsContainer">
            <img src={investidors} alt="" />
        </div>
    )
}