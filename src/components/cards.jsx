import { useEffect, useState } from "react"
import Result from "./result";

export default function Cards({ pokemons, setPokemons, setScore, score }) {
    const [countClicks, setCountClicks] = useState({});
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);

    function checkFailed(name) {
        if (countClicks[name] == 0) {
            setResult('Game Over!');
            setScore(prev => prev - 1);
        }
    }
    function shuffleArr() {
        setPokemons(prev => [...prev.sort(() => Math.random() - 0.5)]);
    }
    function checkWinner() {
        let _flag = 0;
        if (Object.keys(countClicks).length == pokemons.length - 1) {
            for (let key in countClicks) {
                if (countClicks[key] == 0) _flag = 1;
                else {
                    _flag = 0;
                    break;
                }
            }
            if (_flag == 1) setResult('You Win!');
        }
    }
    function handleCount(name) {
        if (result == 'win' || result == 'fail') setScore(0);
        else setScore(Object.keys(countClicks).length + 1);
        let val;
        if (Object.prototype.hasOwnProperty.call(countClicks, name)) {
            val = countClicks[name];
            val++;
        }
        else val = 0
        setCountClicks({ ...countClicks, [name]: val })
        checkFailed(name);
        checkWinner();
        shuffleArr();
    }
    useEffect(() => {
        setLoading(true);
        const fetchImages = async () => {
            try {
                let promises = pokemons.map(async (pokemon) => {
                    let response = await fetch(pokemon.url);
                    let data = await response.json();
                    return data.sprites.front_default;
                })
                const imgUrls = await Promise.all(promises);
                setImages(imgUrls);
                setLoading(false);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchImages();
    }, [pokemons])
    return (
        <>
            <div id="cards">
                {loading ? <h1>Loading...</h1> : pokemons.map((pokemon, index) => <Card name={pokemon.name} url={images[index]} key={index} handleCount={handleCount} />)}
            </div>
            {result != null && <Result result={result} score={score} />}
        </>
    )
}
function Card({ name, url, handleCount }) {
    return (
        <div className="card cardFront" onClick={() => handleCount(name)}>
            {url && <img src={url} alt="" />}
            <h5>{name}</h5>
        </div>
    )
}