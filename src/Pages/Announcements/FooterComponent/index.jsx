import linkedinLogo from "../../../Components/Footer/assets/linkedin.svg"
import "./styles.scss"

export const FooterComponent = () => {
  return (
    <>
      <div className="announcements-footer-container">
        <div className="announcements-container-content">
          <div className="announcements-copyright">
            <h4>Copyright 2021 YDUQS</h4>
          </div>
          <div className="announcements-terms">
            <h5>Termo de Privacidade | Termos e Condições</h5>
          </div>
          <div className="announcements-workWithUs">
            <h5>Trabalhe Conosco</h5>
          </div>
          <div className="announcements-linkedinLogo">
            <img src={linkedinLogo} alt="" />
          </div>
          <div className="announcements-devFor">
            <h5>
              Desenvolvido por: <span>RIWeb</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
