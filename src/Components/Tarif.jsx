import './tarif.css';
import { useState } from 'react';



function Tarif(props) {
const {title, price, speed, text, background}=props;

const [pressed, setPressed]= useState(false);
const handleChange=()=>{
setPressed(!pressed)
}
return (
        
        <div onClick={handleChange}  className={'card '  + (pressed?'selected':'')}>
        <div className={background}>
        <div className='cardTitle' >
        {title}
                </div>
        <div className='cardPrice'>
        {price}
                </div>
        </div>
        <div className="cardSpeed">
        {speed}
                </div>
        <div className="cardText">
        {text}
                </div>
        
        </div>
)}
        
export default Tarif;