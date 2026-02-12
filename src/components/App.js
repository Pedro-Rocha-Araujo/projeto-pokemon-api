import React, {useEffect, useState} from "react"
import axios from "axios"
import Header from "./Header"
import Card from "./Card"
import "./App.css"

function App() {
    const [pokemons, setPokemons] = useState([])
    useEffect(()=>{
        getPokemons()
    }, [])
    const getPokemons = () => {
        let endpoints = []
        for(let i = 1; i<13; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        let response = axios.all(endpoints.map((_,i)=> axios.get(_))).then((res)=>{
            setPokemons(res)
        })
        return response
    }
    
    return (
        <div className="main">
            <Header />
            <main>
                {pokemons.map((_,i)=>{
                    return <Card key={i} nome={_.data.name} img={_.data.sprites.front_default} />
                })}
            </main>
        </div>
    )
}

export default App