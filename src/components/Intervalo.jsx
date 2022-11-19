import React from "react";
import "./Intervalo.css";
import Card from "./Card";


function Intervalo(props) {

    const {min, max} = props;

    return (
        <Card title="Intervalo de Número" red>
            <div className="Intervalo">
                <span>
                    <label>Mínimo:</label>
                    <input
                        type="number"
                        value={min}
                        onChange={e => {
                            // O +e converte o parametro em número
                            props.onMinChanged(+e.target.value)
                        }}
                    />
                </span>
                <span>
                    <label>Máximo:</label>
                    <input
                        type="number"
                        value={max}
                        onChange={e => {
                            // O +e converte o parametro em número
                            props.onMaxChanged(+e.target.value)
                        }}
                    />
                </span>
            </div>
        </Card> 
    );
}


export default Intervalo;
