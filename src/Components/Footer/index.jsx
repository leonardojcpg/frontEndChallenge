import linkedinLogo from "./assets/linkedin.svg";
import "../Footer/styles.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container-content">
        <div className="copyright">
          <h4>Copyright 2021 YDUQS</h4>
        </div>        
        <div className="terms">
          <h5>Termo de Privacidade | Termos e Condições</h5>
        </div>
        <div className="workWithUs">
          <h5>Trabalhe Conosco</h5>
        </div>
        <div className="linkedinLogo">
          <img src={linkedinLogo} alt="" />
        </div>
        <div className="devFor">
          <h5>Desenvolvido por: <span>RIWeb</span></h5>
        </div>
      </div>
    </div>
  );
};
