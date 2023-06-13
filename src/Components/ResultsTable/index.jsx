import "./styles.scss"
import searchBlue from "./assets/searchBlue.svg"
import searchBlack from "./assets/searchBlack.svg"
import graphicBlue from "./assets/graphicBlue.svg"
import graphicBlack from "./assets/graphicBlack.svg"
import docBlue from "./assets/docBlue.svg"
import docBlack from "./assets/docBlack.svg"
import speakerBlue from "./assets/speakerBlue.svg"
import speackerBlack from "./assets/speakerBlack.svg"

export const Table = () => {

    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th className="title1">2021</th>
                        <th className="title2">1T</th>
                        <th className="title3">2T</th>
                        <th className="title4">3T</th>
                        <th className="title5">4T</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="description1">ITR</td>
                        <td className="contentR1-2"><img src={searchBlue} alt="" /></td>
                        <td className="contentR1-3"><img src={searchBlack} alt="" /></td>
                        <td className="contentR1-4"><img src={searchBlue} alt="" /></td>
                        <td className="contentR1-5"><img src={searchBlack} alt="" /></td>

                    </tr>
                    <tr>
                        <td className="description2">Apresentação de Resultados</td>
                        <td className="contentR2-2"><img src={graphicBlue} alt="" /></td>
                        <td className="contentR2-3"><img src={graphicBlack} alt="" /></td>
                        <td className="contentR2-4"><img src={graphicBlue} alt="" /></td>
                        <td className="contentR2-5"><img src={graphicBlack} alt="" /></td>
                    </tr>
                    <tr>
                        <td className="description3">Release de Resultados</td>
                        <td className="contentR3-2"><img src={docBlack} alt="" /></td>
                        <td className="contentR3-3"><img src={docBlue} alt="" /></td>
                        <td className="contentR3-4"><img src={docBlack} alt="" /></td>
                        <td className="contentR3-5"><img src={docBlack} alt="" /></td>
                    </tr>
                    <tr>
                        <td className="description4">Planilha de Apoio</td>
                        <td className="contentR4-2"><img src={docBlack} alt="" /></td>
                        <td className="contentR4-3"><img src={docBlue} alt="" /></td>
                        <td className="contentR4-4"><img src={docBlue} alt="" /></td>
                        <td className="contentR4-5"><img src={docBlack} alt="" /></td>

                    </tr>
                    <tr>
                        <td className="description5">Call de resultados</td>
                        <td className="contentR5-2"><img src={speakerBlue} alt="" /></td>
                        <td className="contentR5-3"><img src={speakerBlue} alt="" /></td>
                        <td className="contentR5-4"><img src={speackerBlack} alt="" /></td>
                        <td className="contentR5-5"><img src={speakerBlue} alt="" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}