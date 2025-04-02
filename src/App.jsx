import { useState, useEffect } from "react"
import Header from "./components/header"
import Cards from "./components/cards"
export default function App() {
    const [pokemons, setPokemons] = useState([]);
    const [score, setScore] = useState(0);
    const [flag, setFlag] = useState(false);
    function resetState() {
        setPokemons([]);
        setScore(0);
        setFlag(prev => !prev)
    }

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
                let data = await response.json();
                let shuffled = [...data.results];
                for (let i = shuffled.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }
                setPokemons(shuffled.slice(0, 12));
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchPokemons();
    }, [flag])
    return (
        <div className="App">
            <Header score={score} />
            <div className="scoreCard"><span>{score}</span>/<span>{pokemons.length}</span></div>
            {pokemons.length > 0 ? <Cards pokemons={pokemons} setPokemons={setPokemons} setScore={setScore} score={score} resetState={resetState} /> : <h1 style={{ textAlign: "center" }}>loading ....</h1>}
        </div>
    )
}