import './App.css';
import Card from "./components/Card";
import Intervalo from "./components/Intervalo";


function App() {
    return (
        <div className="App">
            <h1>Projeto React Redux</h1>

            <div className="linha">
                <Intervalo />
            </div>

            <div className="linha">
                <Card title="Card 2" green>
                    Teste 2
                </Card>
                <Card title="Card 3" blue>
                    Teste 3
                </Card>
                <Card title="Card 4" purple>
                    Teste 4
                </Card>
            </div>
        </div>
    );
}


export default App;
