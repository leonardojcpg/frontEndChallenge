import "./styles.scss"
import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import texture1 from "../Results/assets/texture1.svg"
import texture2 from "../Results/assets/texture2.svg"
import bg from "./assets/bg.svg"
import appointmentsBg from "./assets/appointmentsBg.svg"
import socialBg from "./assets/socialBg.svg"
import governanceBg from "./assets/governanceBg.svg"
import ratingImg from "./assets/ratingImg.svg"
import compIcon from "../Results/assets/compIcon.svg"
import imprimir from "../Results/assets/imprimir.svg"
import pdf from "../Results/assets/pdf.svg"

const Annoucements = () => {
    return (
        <>
        <Header/>
        <div className="top">
            <img id="texture1" src={texture1} alt="" />
            <img id="texture2" src={texture2} alt="" />
            <img id="bg" src={bg} alt="" />
        </div>

        <div className="contentBody">
            <h1 className="title">Estratégia e Compromissos</h1>
            <p className="text">
                a Yduqs busca sempre melhorar o engajamento e a comunicação com todos os stakeholders. Nosso compromisso é integrar a sustentabilidade em todos as nossas atividades para fortalecer nosso legado no setor educacional - nos pilares ambientail, social, governança e economico - trabalhando com ética e transparência para o desenvolvimento sustentável.<br></br>
                Somos signatários do Pacto Global da Organização das Nações Unidas (ONU) e do Institudo Ethos, desde junho de 2021, direcionadores que promovem o engajamento dos stakeholders internos e externos e colaboram para disseminar as boas práticas do grupo.
                
            </p>
            <div className="numbersContainer">
                <div className="boxInfo">
                    <h4><span>150</span>R$</h4>
                    <p>Milhões investidos</p>
                </div>
                <div className="boxInfo2">
                <h4><span>150</span>R$</h4>
                    <p>Milhões investidos</p>
                </div>
                <div className="boxInfo3">
                <h4><span>150</span>R$</h4>
                    <p>Milhões investidos</p>
                </div>
                <div className="boxInfo4">
                    <h4><span>150</span>R$</h4>
                    <p>Milhões investidos</p>
                </div>
                <div className="boxInfo5">
                <h4><span>150</span>R$</h4>
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
                <div className="firstParagraph"></div>
                <div className="textPlusImg">
                    <p></p>
                    <img src="" alt="" />
            </div>

            <div className="socialContainer">
                <div className="socialTitle"><h3>Ambiental</h3></div>
                <div className="socialBg">
                    <img src={socialBg} alt="" />
                </div>
                    <p>A Yduqs atua no fortalecimento do pilar social há mais de 50 anos. A expansão e a diversificação das instituições de ensino superior nos permitem alcançar alunos em todas as classes sociais, com variados objetivos de vida e expectativas em relação ao ensino acadêmico.
                    <br></br>
                    Encontramos soluções que possibilitam um aprendizado de qualidade individualizado e presente em todas as regiões geográficas, em municípios com grande variedade de infraestrutura. Nosso maior ativo é o nosso time de docentes e colaboradores, comprometidos e engajados com o modelo de negócio e com a cultura organizacional da Companhia.
                    <br></br>
                    Educar para transformar é o nome do programa que organiza as ações de responsabilidade social corporativa (RSC) da Companhia. Com projetos distribuídos em cinco pilares - Esporte, Escola, Cidadania, Cultura e Inovação & Empreendedorismo -, o programa trabalha para beneficiar as instituições sociais parceiras e para gerar participação de alunos, docentes e colaboradores administrativos.
                    <br></br>
                    Em 2021, para potencializar todo o trabalho voltado para responsabilidade social e ações ao longo desses 50 anos, criamos o Instituto Yduqs, que conta com diversos projetos, parcerias e captação de recursos externos.
                    <br></br>
                    Acesse e conheça mais sobre o Instituto Yduqs
                    </p>
                <div className="governanceContainer">
                    <div className="governanceBg">
                        <img src={governanceBg} alt="" />
                    </div>
                    <h3 className="governanceTitle"></h3>
                    <p>
                    A governança corporativa é um dos pilares da estratégia e do posicionamento da Yduqs no mercado de ensino superior. Qualidade, excelência na gestão, integridade empresarial e manutenção da conformidade e da ética seguem como compromissos da Companhia em seu trabalho de ampliar o acesso à educação de qualidade.
                    <br></br>
                    O aprimoramento da governança e do Compliance tem sido um movimento constante desde 2007, quando a então Estácio Participações passou a ser listada no Novo Mercado da B3. Em 2021, foi criado o Comitê ESG, com representantes de todos os pilares, dedicado a estudar as principais pautas relacionadas ao impacto social, ambiental e de governança da Yduqs e fazer recomendações à Diretoria.
                    <br></br>
                    Acesse mais informações sobre nossa governança.
                    </p>
                </div>
            
            <div className="rating">
                <div className="ratingImages">
                    <img src={ratingImg} alt="" />
                </div>
                <div className="share">
                    <p>Compartilhar: </p>
                    <div className="icons">
                        <img src={compIcon} alt="" />
                        <img src={imprimir} alt="" />
                        <img src={pdf} alt="" />
                    </div>
                </div>
            </div>

            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default Annoucements;