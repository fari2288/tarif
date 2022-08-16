import './tarif.css'

function Tarif(props) {
    const {title, price, speed, text, isSelected}=props;
    return (
        <div className={"card "+ (isSelected?'selected':'')}>
        <div className="cardTitle">
{title}
        </div>
        <div className="cardPrice">
{price}
        </div>
        <div className="cardSpeed">
{speed}
        </div>
        <div className="cardText">
{text}
        </div>
        </div>
    );
    }
    export default Tarif;