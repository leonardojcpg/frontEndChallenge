import "./style.css";
import boxTexture from "./assets/box-textura.svg";
import rectangleImg from "./assets/Rectangle 3.svg";
import info from "./assets/info.svg";
import bullets from "./assets/bullets.svg";
import bannerImg from "./assets/bannerImg.svg";

export const HomeBanner = () => {
  return (
    <div className="banner-container">
      <div className="container-content">
        <div className="texture">
          <img src={boxTexture} alt="" />
        </div>

        <div className="rectangle">
          <img src={rectangleImg} alt="" />
        </div>

        <div className="info">
          <h2>Divulgação de Resultados</h2>
          <div className="blueText">
            <p id="blueText">3T21</p>
          </div>
          <img src={info} alt="" />
        </div>

        <div className="bullets">
          <img src={bullets} alt="" />
        </div>

        <div className="bannerImg">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};
