import { useEffect, useState } from "react"

export default function Cards() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
                let data = await response.json();
                setPokemons(data.results);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchPokemons();
    }, [])
    return (
        <div id="cards">
            {pokemons.length > 0 &&
                pokemons.map((pokemon, index) => (
                    <Card name={pokemon.name} url={pokemon.url} key={index} />
                ))
            }
        </div>
    )
}
function Card({ name, url }) {
    const [src, setSrc] = useState('');

    useEffect(() => {
        const getImg = async () => {
            try {
                let response = await fetch(url);
                let data = await response.json();
                setSrc(data.sprites.front_default)
            }
            catch (error) {
                console.log(error)
            }
        }
        getImg();
    }, [url])

    return (
        <div id="card">
            {src && <img src={src} alt="" />}
            <h4>{name}</h4>
        </div>
    )
}