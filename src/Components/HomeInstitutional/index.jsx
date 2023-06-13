import "./styles.scss"
import card1 from "./assets/card1.svg"
import card2 from "./assets/card2.svg"
import card3 from "./assets/card3.svg"
import card4 from "./assets/card4.svg"

export const HomeInstitutional = () => {
    const cards = [
        {
            id: 1,
            image: card1,
        },
        {
            id: 2,
            image: card2,
        },
        {
            id: 3,
            image: card3
        },
        {
            id: 4,
            image: card4,
        },
    ]

    return (
        <div className="container">
            <ul className="list">
            {cards.map((card) => (
                <div key={card.id} className="card">
                    <img src={card.image} alt={`Card ${card.id}`} />
                </div>
            ))}
            </ul>
        </div>
    )
}
