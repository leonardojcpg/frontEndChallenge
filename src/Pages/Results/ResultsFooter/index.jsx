import linkedinLogo from "../../../Components/Footer/assets/linkedin.svg"
import "./styles.scss"

export const ResultsFooter = () => {
  return (
    <>
      <div className="results-footer-container">
        <div className="results-container-content">
          <div className="results-copyright">
            <h4>Copyright 2021 YDUQS</h4>
          </div>
          <div className="results-terms">
            <h5>Termo de Privacidade | Termos e Condições</h5>
          </div>
          <div className="results-workWithUs">
            <h5>Trabalhe Conosco</h5>
          </div>
          <div className="results-linkedinLogo">
            <img src={linkedinLogo} alt="" />
          </div>
          <div className="results-devFor">
            <h5>
              Desenvolvido por: <span>RIWeb</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
