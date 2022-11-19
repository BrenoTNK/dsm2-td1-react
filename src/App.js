import { React, useState } from "react";
import './App.css';

import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sortea from "./components/Sortea";


function App() {

    const [min, setMin] = useState(10);
    const [max, setMax] = useState(100);

    return (
        <div className="App">
            <h1>Projeto React Redux</h1>

            <div className="linha">
                <Intervalo
                    min={min}
                    max={max}
                    onMinChanged={setMin}
                    onMaxChanged={setMax}
                >

                </Intervalo>
            </div>

            <div className="linha">
                <Media min={min} max={max}>

                </Media>
                <Soma min={min} max={max}>

                </Soma>
                <Sortea min={min} max={max}>

                </Sortea>
            </div>
        </div>
    );
}


export default App;
