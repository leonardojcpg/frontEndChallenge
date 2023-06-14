import "./styles.scss";
import { Header } from "../../Components/Header";
import bg from "./assets/bg.svg";
import appointmentsBg from "./assets/appointmentsBg.svg";
import socialBg1 from "./assets/socialBg1.svg";
import socialBg2 from "./assets/socialBg2.svg";
import governanceBg1 from "./assets/governanceBg1.svg";
import governanceBg2 from "./assets/governanceBg2.svg";
import ratingImg from "./assets/ratingImg.svg";
import compIcon from "../Results/assets/compIcon.svg";
import imprimir from "../Results/assets/imprimir.svg";
import pdf from "../Results/assets/pdf.svg";
import textPlusImg from "./assets/textPlusImg.svg";
import { FooterComponent } from "./FooterComponent";

const Annoucements = () => {
  return (
    <>
      <Header />
      <div className="top">
        <img id="topBg" src={bg} alt="" />
      </div>

      <div className="contentBody">
        <h1 className="title">Estratégia e Compromissos</h1>
        <p className="text">
          a Yduqs busca sempre melhorar o engajamento e a comunicação com todos
          os stakeholders. Nosso compromisso é integrar a sustentabilidade em
          todos as nossas atividades para fortalecer nosso legado no setor
          educacional - nos pilares ambientail, social, governança e economico -
          trabalhando com ética e transparência para o desenvolvimento
          sustentável.
          <br></br>
          <br></br>
          Somos signatários do Pacto Global da Organização das Nações Unidas
          (ONU) e do Institudo Ethos, desde junho de 2021, direcionadores que
          promovem o engajamento dos stakeholders internos e externos e
          colaboram para disseminar as boas práticas do grupo.
        </p>

        <div className="numbersContainer">
          <div>
            <h4>
              <span>150</span>R$
            </h4>
            <p>Milhões investidos</p>
          </div>
          <div>
            <h4>
              <span>150</span>R$
            </h4>
            <p>Milhões investidos</p>
          </div>
          <div>
            <h4>
              <span>150</span>R$
            </h4>
            <p>Milhões investidos</p>
          </div>
          <div>
            <h4>
              <span>150</span>R$
            </h4>
            <p>Milhões investidos</p>
          </div>
          <div>
            <h4>
              <span>150</span>R$
            </h4>
            <p>Milhões investidos</p>
          </div>
        </div>

        <div className="appointmentsContainer">
          <div className="appointmentsTitle">
            <h2>Nossos Compromissos</h2>
          </div>
          <div className="appointmentsBg">
            <img src={appointmentsBg} alt="" />
          </div>
          <div className="environmentalTitle">
            <h3>Ambiental</h3>
          </div>
          <div className="firstParagraph">
            Com práticas de gestão ambiental atualizadas e aderentes às
            legislações e normas pertinentes, as unidades da Yduqs buscam
            reduzir os impactos de suas atividades sobre o meio ambiente, com
            foco na economia de recursos naturais, energéticos e materiais.
            Diretrizes estratégicas orientam esse trabalho, que inclui ações de
            ecoeficiência, coleta seletiva e redução da geração de resíduos.
          </div>
          <div className="textPlusImg">
            <p>
              Sabemos que as mudanças climáticas são um desafio global e fazemos
              a nossa parte para uma agenda positiva nesse tema. Em 2020,
              lançamos a nossa primeira usina fotovoltaica, com capacidade de
              gerar 2.280 MWh por ano, que evitará a emissão de mais de 1500t de
              CO2 equivalente nos próximos 10 anos. Estamos comprometidos em
              conhecer nossas emissões atmosféricas e identificar as novas
              oportunidades para redução.
              <br></br>
              <br></br>
              Por meio de um canal único, o Programa Repartir, recursos
              tecnológicos e materiais que estejam sendo subutilizados poderão
              ser alocados em outras dependências que realmente precisem deles.
              O programa se integra ao conceito de Economia Circular.{" "}
            </p>
            <img src={textPlusImg} alt="" />
          </div>

          <div className="socialContainer">
            <div className="socialBg">
              <div className="socialTitle">
                <h3>Social</h3>
              </div>
              <img id="socialBg1" src={socialBg1} alt="" />
              <img id="socialBg2" src={socialBg2} alt="" />
            </div>
            <p>
              A Yduqs atua no fortalecimento do pilar social há mais de 50 anos.
              A expansão e a diversificação das instituições de ensino superior
              nos permitem alcançar alunos em todas as classes sociais, com
              variados objetivos de vida e expectativas em relação ao ensino
              acadêmico.
              <br></br>
              <br></br>
              Encontramos soluções que possibilitam um aprendizado de qualidade
              individualizado e presente em todas as regiões geográficas, em
              municípios com grande variedade de infraestrutura. Nosso maior
              ativo é o nosso time de docentes e colaboradores, comprometidos e
              engajados com o modelo de negócio e com a cultura organizacional
              da Companhia.
              <br></br> <br></br>
              Educar para transformar é o nome do programa que organiza as ações
              de responsabilidade social corporativa (RSC) da Companhia. Com
              projetos distribuídos em cinco pilares - Esporte, Escola,
              Cidadania, Cultura e Inovação & Empreendedorismo -, o programa
              trabalha para beneficiar as instituições sociais parceiras e para
              gerar participação de alunos, docentes e colaboradores
              administrativos.
              <br></br>
              <br></br>
              Em 2021, para potencializar todo o trabalho voltado para
              responsabilidade social e ações ao longo desses 50 anos, criamos o
              Instituto Yduqs, que conta com diversos projetos, parcerias e
              captação de recursos externos.
              <br></br> <br></br>
              Acesse e conheça mais sobre o Instituto Yduqs
            </p>
            <div className="governanceContainer">
              <div className="governanceBg">
                <img src={governanceBg1} alt="" />
                <img src={governanceBg2} alt="" />
              </div>
              <h3 className="governanceTitle">Governança</h3>
              <p>
                A governança corporativa é um dos pilares da estratégia e do
                posicionamento da Yduqs no mercado de ensino superior.
                Qualidade, excelência na gestão, integridade empresarial e
                manutenção da conformidade e da ética seguem como compromissos
                da Companhia em seu trabalho de ampliar o acesso à educação de
                qualidade.
                <br></br> <br></br>O aprimoramento da governança e do Compliance
                tem sido um movimento constante desde 2007, quando a então
                Estácio Participações passou a ser listada no Novo Mercado da
                B3. Em 2021, foi criado o Comitê ESG, com representantes de
                todos os pilares, dedicado a estudar as principais pautas
                relacionadas ao impacto social, ambiental e de governança da
                Yduqs e fazer recomendações à Diretoria.
                <br></br> <br></br>
                Acesse mais informações sobre nossa governança.
              </p>
            </div>

            <div className="rating">
              <div className="ratingTitle">
                <h3>Índices e Ratings ESG</h3>
              </div>
              <div className="ratingImages">
                <img src={ratingImg} alt="" />
              </div>
              <div className="announcements-share">
                <span>Compartilhar: </span>
                <div className="announcements-icons">
                  <img src={compIcon} alt="" />
                  <img src={imprimir} alt="" />
                  <img src={pdf} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </>
  );
};

export default Annoucements;
