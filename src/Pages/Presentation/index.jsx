import { useState } from 'react';
import "./styles.scss";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import presentationBg from "./assets/presentationBg.svg";
import downloadIcon from "./assets/downloadIcon.svg";
import compartilhar from "./assets/compartilhar.svg"
import imprimir from "./assets/imprimir.svg"
import pdf from "./assets/pdf.svg"

const Presentation = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const listItems = [
    {
      date: '18/06/2021',
      title: 'Apresentação - Aquisição da QConcursos',
    },
    {
      date: '07/04/2021',
      title: 'Apresentação - Bradesco BBI Investment Forum',
    },
    {
        date: '18/06/2021',
        title: 'Apresentação - Bradesco BBI Operação Premium',
      },
      {
        date: '07/04/2021',
        title: 'Apresentação - Bradesco BBI Group Meeting',
      },
      {
        date: '05/02/2021',
        title: 'Apresentação - Conferência Morgan Stanley',
      },
      {
        date: '07/04/2021',
        title: 'Apresentação - Bradesco BBI Operação Premium',
      },
      {
        date: '07/04/2021',
        title: 'Apresentação - Bradesco BBI Group Meeting',
      },
      {
        date: '07/04/2021',
        title: 'Apresentação - Conferência Morgan Stanley',
      },
      {
        date: '07/04/2021',
        title: 'Apresentação - Bradesco BBI Investment Forum',
      },
      {
        date: '07/04/2021',
        title: 'Apresentação - Bradesco BBI Group Meeting',
      },
      {
        date: '07/04/2021',
        title: 'Apresentação - Bradesco BBI Group Meeting',
      },
      {
        date: '07/04/2021',
        title: 'Apresentação - Bradesco BBI Group Meeting',
      },
    
  ].slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <div className="presentation-top">
        <img src={presentationBg} alt="" />
      </div>

      <div className="bodyContainer">
        <div className="title">
          <h2>Apresentações Institucionais e de Conferências</h2>
        </div>
        <div className="input">
          <label htmlFor="">Filtrar por: </label>
          <input type="date" />
        </div>
        <div className="list">
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>
                <span>{item.date}</span>
                <p>- {item.title}</p>
                <img src={downloadIcon} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div className="pagesButton">
          <button onClick={() => handlePageChange(1)}>1</button>
          <button onClick={() => handlePageChange(2)}>2</button>
          <button onClick={() => handlePageChange(3)}>3</button>
          <button onClick={() => handlePageChange(4)}>4</button>
          <button className='lastButton' onClick={() => handlePageChange(5)}>Última</button>
        </div>

        <div className="share">
          <p>Compartilhar: </p>
          <div className="icons">
            <img src={compartilhar} alt="" />
            <img src={imprimir} alt="" />
            <img src={pdf} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Presentation;
