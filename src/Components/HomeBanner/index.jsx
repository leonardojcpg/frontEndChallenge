import "./style.css"
import boxTexture from  "./assets/box-textura.svg"

export const HomeBanner = () => {
    return (
        <div className="banner-container">
            <div className="container-content">
                <div className="texture">
                    <img src={boxTexture} alt="" />
                </div>
                <div className="rectangle"></div>
                <div className="info"></div>
                <div className="bullets"></div>
                <div className="bannerImg"></div>
            </div>
        </div>
    )
}