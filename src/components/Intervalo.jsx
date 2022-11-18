import React from "react";
import "./Intervalo.css";
import Card from "./Card";

function Intervalo(props) {
    return (
        <Card title="Intervalo de Número" red>
            <div className="Intervalo">
                <span>
                    <label>Mínimo:</label>
                    <input type="number" value={0} />
                </span>
                <span>
                    <label>Máximo:</label>
                    <input type="number" value={10} />
                </span>
            </div>
        </Card> 
    );
}


export default Intervalo;
